import StatusCodes from 'http-status-codes';
import { Request, Response, Router, RequestHandler } from 'express';
import { SerialPort } from 'serialport';

// import portService from '@services/port-service';
// import { ParamMissingError } from '@shared/errors';



// Constants
const router = Router();
const { CREATED, OK } = StatusCodes;

// Paths
export const p = {
    get: '/all',
    add: '/add',
    update: '/update',
    delete: '/delete/:id',
} as const;



/**
 * Get all ports.
 */
// router.get(p.get, (async (_: Request, res: Response) => {
//     await SerialPort.list().then((ports) => {
// 		console.log({ ports });
// 		// res.json({ ports });
// 		// if (err) {
// 		// 	document.getElementById('error').textContent = err.message;
// 		// 	return;
// 		// } else {
// 		// 	document.getElementById('error').textContent = '';
// 		// }
// 		// console.log('ports', ports);

// 		// if (ports.length === 0) {
// 		// 	document.getElementById('error').textContent = 'No ports discovered';
// 		// }

// 		// tableHTML = tableify(ports);
// 		// document.getElementById('ports').innerHTML = tableHTML;
// 	});
//     return res.status(OK).json({ports});
// }) as RequestHandler);


// /**
//  * Add one port.
//  */
// router.post(p.add, async (req: Request, res: Response) => {
//     const { port } = req.body;
//     // Check param
//     if (!port) {
//         throw new ParamMissingError();
//     }
//     // Fetch data
//     await portService.addOne(port);
//     return res.status(CREATED).end();
// });


// /**
//  * Update one port.
//  */
// router.put(p.update, async (req: Request, res: Response) => {
//     const { port } = req.body;
//     // Check param
//     if (!port) {
//         throw new ParamMissingError();
//     }
//     // Fetch data
//     await portService.updateOne(port);
//     return res.status(OK).end();
// });


// /**
//  * Delete one port.
//  */
// router.delete(p.delete, async (req: Request, res: Response) => {
//     const { id } = req.params;
//     // Check param
//     if (!id) {
//         throw new ParamMissingError();
//     }
//     // Fetch data
//     await portService.delete(Number(id));
//     return res.status(OK).end();
// });


// Export default
export default router;
