import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Bundles, Dialog, Footer, Header, Editor, Modes } from './components';
import './scss/style.scss';

const Hello = () => {
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
				<Route path="/" element={<Hello />} />
			</Routes>
		</Router>
	);
}
