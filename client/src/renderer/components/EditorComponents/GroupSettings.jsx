import React from 'react';
export default function GroupSettings({}) {
	return (
		<div
			style={{
				margin: '10px'
			}}
		>
			<div
				title="Base pattern."
				style={{
					width: '115px',
					display: 'inline-block',
					verticalAlign: 'top'
				}}
			>
				<span
					style={{
						width: '100%'
					}}
				>
					Base Pattern
				</span>
				<select
					style={{
						width: '100%',
						display: 'inline-block'
					}}
				>
					<option value={0}>Strobe</option>
					<option value={1}>Tracer</option>
					<option value={2}>Morph</option>
					<option value={3}>Sword</option>
					<option value={4}>Wave</option>
					<option value={5}>Stretch</option>
					<option value={6}>Shift</option>
					<option value={7}>Triple</option>
					<option value={8}>Stepper</option>
					<option value={9}>Random</option>
				</select>
			</div>
			<div
				title="Colors used in each set. If 0 or more than the number of colors, all the colors are used."
				style={{
					width: '175px',
					display: 'inline-block',
					marginLeft: '20px'
				}}
			>
				<span
					style={{
						width: '100%'
					}}
				>
					Group Size
				</span>
				<div
					style={{
						display: 'inline-block',
						width: '175px'
					}}
				>
					<input
						type="text"
						style={{
							width: '30px',
							float: 'left'
						}}
					/>
					<div
						className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
						style={{
							width: '115px',
							float: 'right'
						}}
					>
						<span
							className="ui-slider-handle ui-state-default ui-corner-all"
							tabIndex={0}
							style={{
								left: '0%'
							}}
						/>
					</div>
				</div>
			</div>
			<div
				title="Colors skipped after each set. If 0, it's the same as group size."
				style={{
					width: '175px',
					display: 'inline-block',
					marginLeft: '20px'
				}}
			>
				<span
					style={{
						width: '100%'
					}}
				>
					Skip After
				</span>
				<div
					style={{
						display: 'inline-block',
						width: '175px'
					}}
				>
					<input
						type="text"
						style={{
							width: '30px',
							float: 'left'
						}}
					/>
					<div
						className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
						style={{
							width: '115px',
							float: 'right'
						}}
					>
						<span
							className="ui-slider-handle ui-state-default ui-corner-all"
							tabIndex={0}
							style={{
								left: '0%'
							}}
						/>
					</div>
				</div>
			</div>
			<div
				title="Times set is repeated before skipping."
				style={{
					width: '175px',
					display: 'inline-block',
					marginLeft: '20px'
				}}
			>
				<span
					style={{
						width: '100%'
					}}
				>
					Repeat Group
				</span>
				<div
					style={{
						display: 'inline-block',
						width: '175px'
					}}
				>
					<input
						type="text"
						style={{
							width: '30px',
							float: 'left'
						}}
					/>
					<div
						className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
						style={{
							width: '115px',
							float: 'right'
						}}
					>
						<span
							className="ui-slider-handle ui-state-default ui-corner-all"
							tabIndex={0}
							style={{
								left: '0%'
							}}
						/>
					</div>
				</div>
			</div>
			<div
				title="Defines the pattern."
				style={{
					width: '175px',
					display: 'none',
					marginLeft: '20px'
				}}
			>
				<span
					style={{
						width: '100%'
					}}
				>
					Arg 0 3
				</span>
				<div
					style={{
						display: 'inline-block',
						width: '175px'
					}}
				>
					<input
						type="text"
						style={{
							width: '30px',
							float: 'left'
						}}
					/>
					<div
						className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
						style={{
							width: '115px',
							float: 'right'
						}}
					>
						<span
							className="ui-slider-handle ui-state-default ui-corner-all"
							tabIndex={0}
							style={{
								left: '0%'
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
