import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path from 'path';
import helmet from 'helmet';

import express, { NextFunction, Request, Response } from 'express';
import StatusCodes from 'http-status-codes';
import 'express-async-errors';

import apiRouter from './routes/api';
import logger from 'jet-logger';
import { CustomError } from '@shared/errors';

import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import { SerialPort } from 'serialport';
import tableify from 'tableify';

/***********************************************************************************
 *                                  Database
 **********************************************************************************/

mongoose.connect('mongodb://localhost/example_db');

// Constants
const app = express();

/***********************************************************************************
 *                                  Middlewares
 **********************************************************************************/

// Common middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Show routes called in console during development
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

// Security (helmet recommended in express docs)
if (process.env.NODE_ENV === 'production') {
	app.use(helmet());
}

/***********************************************************************************
 *                         API routes and error handling
 **********************************************************************************/

// Add api router
app.use('/api', apiRouter);

// Error handling
app.use((err: Error | CustomError, _: Request, res: Response, __: NextFunction) => {
	logger.err(err, true);
	const status = err instanceof CustomError ? err.HttpStatus : StatusCodes.BAD_REQUEST;
	return res.status(status).json({
		error: err.message
	});
});

/***********************************************************************************
 *                                  Front-end content
 **********************************************************************************/

// Set viesw dir
const viewsDir = path.join(__dirname, 'views');
app.set('views', viewsDir);

// Set static dir
const staticDir = path.join(__dirname, 'public');
app.use(express.static(staticDir));

app.get('/api/get_serial_ports', (_: Request, res: Response) => {
	SerialPort.list().then((ports) => {
		console.log({ ports });
		res.json(ports);
	});
});

app.post('/api/connect', (_: Request, res: Response) => {
	const { path } = _.body;
	console.log({ path });
	const port = new SerialPort({ path: path, baudRate: 115200 });
	console.log({ port });
	port.write('main screen turn on', function(err) {
		if (err) {
			return console.log('Error on write: ', err.message);
		}
		console.log('message written');
	});

	// Open errors will be emitted as an error event
	port.on('error', function(err) {
		console.log('Error: ', err.message);
	});
	res.json(port);
});

app.post('/api/disconnect', (_: Request, res: Response) => {
	const { port } = _.body;
	console.log({ port });
	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
	port.close();

	res.json({});
});

// Serve index.html file
app.get('*', (_: Request, res: Response) => {
	// res.sendFile('index.html', {root: viewsDir});
	res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// app.get('*', (request: any, response: any) => {
//     response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });

// Export here and start in a diff file (for testing).
export default app;
