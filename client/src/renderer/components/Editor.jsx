import {
	GroupSettings,
	TopAccelSlider,
	ColorSetEditor,
	BottomAccelSlider,
	FlashingPatternsEditor,
	Primer
} from './EditorComponents';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listPorts, connectToPort, disconnectToPort } from '../redux/actions/portActions';

export default function Editor({}) {
	const dispatch = useDispatch();

	const portList = useSelector((state) => state.portList);
	const { ports, loading, error } = portList;

	const portConnect = useSelector((state) => state.portConnect);
	const { port, loading: portLoading, error: portError } = portConnect;
	console.log({ port });

	const [ portChoice, setPortChoice ] = useState();

	useEffect(() => {
		getPorts();
		return () => {};
	}, []);

	const getPorts = () => {
		dispatch(listPorts());
	};

	const connectPort = (connect) => {
		dispatch(connectToPort(portChoice, connect));
	};

	return (
		<div id="editor">
			<div
				style={{
					margin: '5px'
				}}
			>
				<select onChange={(e) => setPortChoice(e.target.value)}>
					{ports &&
						ports.map((port, index) => (
							<option key={index} value={port.path}>
								{port.path}
							</option>
						))}
				</select>
				{port && Object.keys(port).length > 0 ? (
					<input
						type="button"
						onClick={() => connectPort(false, port)}
						defaultValue="Disconnect"
						style={{
							width: '120px'
						}}
					/>
				) : (
					<input
						type="button"
						onClick={() => connectPort(true)}
						defaultValue="Connect"
						style={{
							width: '120px'
						}}
					/>
				)}

				<input
					type="button"
					defaultValue="Refresh Ports"
					onClick={() => getPorts()}
					style={{
						width: '120px'
					}}
				/>
			</div>
			<div
				style={{
					margin: '5px'
				}}
			>
				<select>
					<option value={0}>Vectr</option>
					<option value={1}>Primer</option>
				</select>
			</div>
			<div>
				<GroupSettings />
				{/* <TopAccelSlider />
				<div
					style={{
						minHeight: '15px'
					}}
				/> */}
				<ColorSetEditor />
				{/* <div
					style={{
						minHeight: '15px'
					}}
				/>
				<BottomAccelSlider />
				<div
					style={{
						minHeight: '15px'
					}}
				/> */}
				<FlashingPatternsEditor />
			</div>
			<Primer />
		</div>
	);
}
