import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Bundles, Dialog, Footer, Header, Editor, Modes } from './components';

const Hello = () => {
	return (
		<div id="main">
			<Header />
			<Footer />
			<Editor />
			<Bundles />
			<Modes />
			<Dialog />
		</div>
	);
};

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Hello />} />
			</Routes>
		</Router>
	);
}
