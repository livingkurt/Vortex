import React from 'react';
export default function Modes({}) {
	return (
		<div id="modes">
			<span
				style={{
					position: 'absolute',
					top: '0px',
					fontWeight: 'bold',
					marginLeft: '15px'
				}}
			>
				Mode Library
			</span>
			<div id="mode-list">
				<div className="mode" id="arrr-gee-beebee">
					Arrr Gee Beebee
				</div>
				<div className="mode" id="blink-morph">
					Blink Morph
				</div>
				<div className="mode" id="darkside-of-the-mode">
					Darkside of the Mode
				</div>
				<div className="mode" id="dash-dops">
					Dash Dops
				</div>
				<div className="mode" id="eye-bleach">
					Eye Bleach
				</div>
				<div className="mode" id="eye-floss">
					Eye Floss
				</div>
				<div className="mode" id="heat-wave">
					Heat Wave
				</div>
				<div className="mode" id="metamorph">
					Metamorph
				</div>
				<div className="mode" id="nebulous">
					Nebulous
				</div>
				<div className="mode" id="rainbow-strobe">
					Rainbow Strobe
				</div>
				<div className="mode" id="sourcery">
					Sourcery
				</div>
				<div className="mode" id="spark-plug">
					Spark Plug
				</div>
			</div>
			<div id="mode-controls">
				<div
					style={{
						margin: '5px',
						textAlign: 'center'
					}}
				>
					<input
						id="mode-save"
						type="text"
						style={{
							display: 'block',
							width: '170px'
						}}
					/>
					<button
						type="button"
						style={{
							width: '100px',
							display: 'block',
							margin: '0px auto'
						}}
					>
						Save Mode
					</button>
				</div>
			</div>
		</div>
	);
}
