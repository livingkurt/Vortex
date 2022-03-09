import React from 'react';
export default function Bundles({}) {
	return (
		<div id="bundles">
			<span
				style={{
					position: 'absolute',
					top: '0px',
					fontWeight: 'bold',
					marginLeft: '15px'
				}}
			>
				Bundle 1
			</span>
			<div id="bundle0">
				<div className="mode" id="mode-item-39986">
					Metamorph
				</div>
				<div className="mode" id="mode-item-14716">
					Darkside of the Mode
				</div>
				<div className="mode" id="mode-item-60174">
					Rainbow Strobe
				</div>
				<div className="mode" id="mode-item-53219">
					Sourcery
				</div>
				<div className="mode" id="mode-item-39980">
					Heat Wave
				</div>
				<div className="mode" id="mode-item-11302">
					Nebulous
				</div>
				<div className="mode" id="mode-item-563">
					Dash Dops
				</div>
				<div className="mode" id="mode-item-36169">
					Spark Plug
				</div>
			</div>
			<span
				style={{
					position: 'absolute',
					top: '265px',
					fontWeight: 'bold',
					marginLeft: '15px'
				}}
			>
				Bundle 2
			</span>
			<div id="bundle1">
				<div className="mode" id="mode-item-44703">
					Blink Morph
				</div>
				<div className="mode" id="mode-item-13199">
					Arrr Gee Beebee
				</div>
				<div className="mode" id="mode-item-5080">
					Rainbow Strobe
				</div>
				<div className="mode" id="mode-item-37168">
					Eye Floss
				</div>
				<div className="mode" id="mode-item-42741">
					Heat Wave
				</div>
				<div className="mode" id="mode-item-5941">
					Nebulous
				</div>
				<div className="mode" id="mode-item-65006">
					Eye Bleach
				</div>
				<div className="mode" id="mode-item-13885">
					Spark Plug
				</div>
			</div>
			<div id="bundle-controls">
				<div
					style={{
						margin: '5px',
						textAlign: 'center'
					}}
				>
					<input
						id="firmware-save"
						type="text"
						style={{
							display: 'block',
							width: '150px'
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
						Save Firmware
					</button>
				</div>
			</div>
		</div>
	);
}
