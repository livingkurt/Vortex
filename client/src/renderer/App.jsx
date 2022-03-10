import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Bundles, Dialog, Footer, Header, Editor, Modes } from './components';
import './scss/style.scss';
import { listPorts } from './redux/actions/portActions';

const Main = () => {
	const dispatch = useDispatch();

	const portList = useSelector((state) => state.portList);
	const { ports, loading, error } = portList;

	useEffect(() => {
		dispatch(listPorts());
		return () => {};
	}, []);

	return (
		<div id="main" className="p-20px">
			<Header />
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
