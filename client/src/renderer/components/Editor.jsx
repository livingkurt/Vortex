import {
	GroupSettings,
	TopAccelSlider,
	ColorSetEditor,
	BottomAccelSlider,
	FlashingPatternsEditor,
	Primer
} from './EditorComponents';
import React from 'react';
export default function Editor({}) {
	return (
		<div id="editor">
			<div
				style={{
					margin: '5px'
				}}
			>
				<select>
					<option value={0}>/dev/cu.usbmodem1433401</option>
					<option value={1}>/dev/tty.usbmodem1433401</option>
					<option value={2}>/dev/cu.usbserial-14630</option>
					<option value={3}>/dev/tty.usbserial-14630</option>
					<option value={4}>/dev/cu.Bluetooth-Incoming-Port</option>
					<option value={5}>/dev/tty.Bluetooth-Incoming-Port</option>
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
