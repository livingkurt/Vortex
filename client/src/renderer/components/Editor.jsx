import {
	GroupSettings,
	TopAccelSlider,
	ColorSetEditor,
	BottomAccelSlider,
	FlashingPatternsEditor,
	Primer
} from './EditorComponents';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listPorts } from '../redux/actions/portActions';

export default function Editor({}) {
	const dispatch = useDispatch();

	const portList = useSelector((state) => state.portList);
	const { ports, loading, error } = portList;
	console.log({ ports: ports.ports });

	useEffect(() => {
		get_ports();
		return () => {};
	}, []);

	const get_ports = () => {
		dispatch(listPorts());
	};

	return (
		<div id="editor">
			<div
				style={{
					margin: '5px'
				}}
			>
				<select>
					{ports.ports &&
						ports.ports.length > 0 &&
						ports.ports.map((port) => <option value={0}>{port.path}</option>)}
				</select>
				<input
					type="button"
					defaultValue="Connect"
					style={{
						width: '120px'
					}}
				/>
				<input
					type="button"
					defaultValue="Refresh Ports"
					onClick={get_ports}
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
