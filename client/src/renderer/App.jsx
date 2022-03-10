import React, { useEffect } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Bundles, Dialog, Footer, Header, Editor, Modes } from './components';
import './scss/style.scss';
// import SerialPort from 'serialport';
import API from './utils/API.ts';

// console.log({ SerialPort });

const Main = () => {
	useEffect(() => {
		get_serial_ports();
		return () => {};
	}, []);

	const get_serial_ports = async () => {
		const { data } = await API.get_serial_ports();
		console.log({ data });
	};

	return (
		<div id="main" className="p-20px">
			<Header />
			<h1>Hello World!</h1>
			We are using Node.js <span id="node-version" />, Chromium <span id="chrome-version" />, Electron{' '}
			<span id="electron-version" />, and Serialport <span id="serialport-version" />
			<div id="error" />
			<div id="ports" />
			<div className="jc-b">
				<Editor />
				<Bundles />
				<Modes />
			</div>
			<Footer />
			<Dialog />
		</div>
	);
};

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Main />} />
			</Routes>
		</Router>
	);
}
