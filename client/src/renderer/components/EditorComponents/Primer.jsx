import React from 'react';
export default function Primer({}) {
	return (
		<div
			style={{
				display: 'none'
			}}
		>
			<div
				style={{
					margin: '10px'
				}}
			>
				<div>
					<span
						style={{
							display: 'inline-block',
							margin: '5px'
						}}
					>
						Trigger Type
					</span>
					<select
						style={{
							display: 'inline-block'
						}}
					>
						<option value={0}>Off</option>
						<option value={1}>Velocity</option>
						<option value={2}>Pitch</option>
						<option value={3}>Roll</option>
						<option value={4}>Flip</option>
					</select>
				</div>
				<div className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all ui-limitslider ui-state-disabled vanderlee-limitslider-disabled">
					<div
						className="ui-slider-range ui-widget-header trigger-1 ui-slider-range-max"
						style={{
							width: '84.375%'
						}}
					/>
					<div
						className="ui-slider-range ui-widget-header trigger-01"
						style={{
							width: '0%',
							left: '15.625%'
						}}
					/>
					<div
						className="ui-slider-range ui-widget-header trigger-0 ui-slider-range-min"
						style={{
							width: '15.625%'
						}}
					/>
					<span
						className="ui-slider-handle ui-state-default ui-corner-all"
						tabIndex={0}
						style={{
							left: '15.625%'
						}}
					/>
					<span
						className="ui-slider-handle ui-state-default ui-corner-all"
						tabIndex={0}
						style={{
							left: '15.625%'
						}}
					/>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						listStyleType: 'none'
					}}
				>
					<input
						type="text"
						style={{
							width: '30px',
							margin: '5px 50px'
						}}
					/>
					<input
						type="text"
						style={{
							width: '30px',
							margin: '5px 50px'
						}}
					/>
				</div>
			</div>
			<div>
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
				<div
					style={{
						margin: '0px auto',
						width: '785px'
					}}
				>
					<div
						style={{
							display: 'inline-block',
							width: '200px'
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
								width: '140px',
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
					<div
						style={{
							marginLeft: '20px',
							display: 'inline-block'
						}}
					>
						<div
							style={{
								display: 'inline-block'
							}}
						>
							<input
								id="primer-color-0-0"
								type="text"
								set={0}
								slot={0}
								style={{
									display: 'none'
								}}
							/>
							<div
								id="primer-color-0-0-target"
								className="color"
								style={{
									background: 'rgb(208, 0, 0)'
								}}
							/>
						</div>
						<div
							style={{
								display: 'inline-block'
							}}
						>
							<input
								id="primer-color-0-1"
								type="text"
								set={0}
								slot={1}
								style={{
									display: 'none'
								}}
							/>
							<div
								id="primer-color-0-1-target"
								className="color"
								style={{
									display: 'none',
									background: 'rgb(0, 0, 0)'
								}}
							/>
						</div>
						<div
							style={{
								display: 'inline-block'
							}}
						>
							<input
								id="primer-color-0-2"
								type="text"
								set={0}
								slot={2}
								style={{
									display: 'none'
								}}
							/>
							<div
								id="primer-color-0-2-target"
								className="color"
								style={{
									display: 'none',
									background: 'rgb(0, 0, 0)'
								}}
							/>
						</div>
						<div
							style={{
								display: 'inline-block'
							}}
						>
							<input
								id="primer-color-0-3"
								type="text"
								set={0}
								slot={3}
								style={{
									display: 'none'
								}}
							/>
							<div
								id="primer-color-0-3-target"
								className="color"
								style={{
									display: 'none',
									background: 'rgb(0, 0, 0)'
								}}
							/>
						</div>
						<div
							style={{
								display: 'inline-block'
							}}
						>
							<input
								id="primer-color-0-4"
								type="text"
								set={0}
								slot={4}
								style={{
									display: 'none'
								}}
							/>
							<div
								id="primer-color-0-4-target"
								className="color"
								style={{
									display: 'none',
									background: 'rgb(0, 0, 0)'
								}}
							/>
						</div>
						<div
							style={{
								display: 'inline-block'
							}}
						>
							<input
								id="primer-color-0-5"
								type="text"
								set={0}
								slot={5}
								style={{
									display: 'none'
								}}
							/>
							<div
								id="primer-color-0-5-target"
								className="color"
								style={{
									display: 'none',
									background: 'rgb(0, 0, 0)'
								}}
							/>
						</div>
						<div
							style={{
								display: 'inline-block'
							}}
						>
							<input
								id="primer-color-0-6"
								type="text"
								set={0}
								slot={6}
								style={{
									display: 'none'
								}}
							/>
							<div
								id="primer-color-0-6-target"
								className="color"
								style={{
									display: 'none',
									background: 'rgb(0, 0, 0)'
								}}
							/>
						</div>
						<div
							style={{
								display: 'inline-block'
							}}
						>
							<input
								id="primer-color-0-7"
								type="text"
								set={0}
								slot={7}
								style={{
									display: 'none'
								}}
							/>
							<div
								id="primer-color-0-7-target"
								className="color"
								style={{
									display: 'none',
									background: 'rgb(0, 0, 0)'
								}}
							/>
						</div>
						<div
							style={{
								display: 'inline-block'
							}}
						>
							<input
								id="primer-color-0-8"
								type="text"
								set={0}
								slot={8}
								style={{
									display: 'none'
								}}
							/>
							<div
								id="primer-color-0-8-target"
								className="color"
								style={{
									display: 'none',
									background: 'rgb(0, 0, 0)'
								}}
							/>
						</div>
						<div
							style={{
								display: 'inline-block'
							}}
						>
							<input
								id="primer-color-0-9"
								type="text"
								set={0}
								slot={9}
								style={{
									display: 'none'
								}}
							/>
							<div
								id="primer-color-0-9-target"
								className="color"
								style={{
									display: 'none',
									background: 'rgb(0, 0, 0)'
								}}
							/>
						</div>
						<div
							style={{
								display: 'inline-block'
							}}
						>
							<input
								id="primer-color-0-10"
								type="text"
								set={0}
								slot={10}
								style={{
									display: 'none'
								}}
							/>
							<div
								id="primer-color-0-10-target"
								className="color"
								style={{
									display: 'none',
									background: 'rgb(0, 0, 0)'
								}}
							/>
						</div>
						<div
							style={{
								display: 'inline-block'
							}}
						>
							<input
								id="primer-color-0-11"
								type="text"
								set={0}
								slot={11}
								style={{
									display: 'none'
								}}
							/>
							<div
								id="primer-color-0-11-target"
								className="color"
								style={{
									display: 'none',
									background: 'rgb(0, 0, 0)'
								}}
							/>
						</div>
						<div
							style={{
								display: 'inline-block'
							}}
						>
							<input
								id="primer-color-0-12"
								type="text"
								set={0}
								slot={12}
								style={{
									display: 'none'
								}}
							/>
							<div
								id="primer-color-0-12-target"
								className="color"
								style={{
									display: 'none',
									background: 'rgb(0, 0, 0)'
								}}
							/>
						</div>
						<div
							style={{
								display: 'inline-block'
							}}
						>
							<input
								id="primer-color-0-13"
								type="text"
								set={0}
								slot={13}
								style={{
									display: 'none'
								}}
							/>
							<div
								id="primer-color-0-13-target"
								className="color"
								style={{
									display: 'none',
									background: 'rgb(0, 0, 0)'
								}}
							/>
						</div>
						<div
							style={{
								display: 'inline-block'
							}}
						>
							<input
								id="primer-color-0-14"
								type="text"
								set={0}
								slot={14}
								style={{
									display: 'none'
								}}
							/>
							<div
								id="primer-color-0-14-target"
								className="color"
								style={{
									display: 'none',
									background: 'rgb(0, 0, 0)'
								}}
							/>
						</div>
						<div
							style={{
								display: 'inline-block'
							}}
						>
							<input
								id="primer-color-0-15"
								type="text"
								set={0}
								slot={15}
								style={{
									display: 'none'
								}}
							/>
							<div
								id="primer-color-0-15-target"
								className="color"
								style={{
									display: 'none',
									background: 'rgb(0, 0, 0)'
								}}
							/>
						</div>
					</div>
				</div>
			</div>
			<div
				style={{
					minHeight: '10px'
				}}
			/>
			<div
				style={{
					visibility: 'hidden'
				}}
			>
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
							Arg 1 3
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
				<div
					style={{
						margin: '0px auto',
						width: '785px'
					}}
				>
					<div
						style={{
							display: 'inline-block',
							width: '200px'
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
								width: '140px',
								float: 'right'
							}}
						>
							<span
								className="ui-slider-handle ui-state-default ui-corner-all"
								tabIndex={0}
								style={{
									left: '13.3333%'
								}}
							/>
						</div>
					</div>
					<div
						style={{
							marginLeft: '20px',
							display: 'inline-block'
						}}
					>
						<div
							style={{
								display: 'inline-block'
							}}
						>
							<input
								id="primer-color-1-0"
								type="text"
								set={1}
								slot={0}
								style={{
									display: 'none'
								}}
							/>
							<div
								id="primer-color-1-0-target"
								className="color"
								style={{
									background: 'rgb(208, 0, 0)'
								}}
							/>
						</div>
						<div
							style={{
								display: 'inline-block'
							}}
						>
							<input
								id="primer-color-1-1"
								type="text"
								set={1}
								slot={1}
								style={{
									display: 'none'
								}}
							/>
							<div
								id="primer-color-1-1-target"
								className="color"
								style={{
									background: 'rgb(0, 224, 0)'
								}}
							/>
						</div>
						<div
							style={{
								display: 'inline-block'
							}}
						>
							<input
								id="primer-color-1-2"
								type="text"
								set={1}
								slot={2}
								style={{
									display: 'none'
								}}
							/>
							<div
								id="primer-color-1-2-target"
								className="color"
								style={{
									background: 'rgb(0, 0, 240)'
								}}
							/>
						</div>
						<div
							style={{
								display: 'inline-block'
							}}
						>
							<input
								id="primer-color-1-3"
								type="text"
								set={1}
								slot={3}
								style={{
									display: 'none'
								}}
							/>
							<div
								id="primer-color-1-3-target"
								className="color"
								style={{
									display: 'none',
									background: 'rgb(0, 0, 0)'
								}}
							/>
						</div>
						<div
							style={{
								display: 'inline-block'
							}}
						>
							<input
								id="primer-color-1-4"
								type="text"
								set={1}
								slot={4}
								style={{
									display: 'none'
								}}
							/>
							<div
								id="primer-color-1-4-target"
								className="color"
								style={{
									display: 'none',
									background: 'rgb(0, 0, 0)'
								}}
							/>
						</div>
						<div
							style={{
								display: 'inline-block'
							}}
						>
							<input
								id="primer-color-1-5"
								type="text"
								set={1}
								slot={5}
								style={{
									display: 'none'
								}}
							/>
							<div
								id="primer-color-1-5-target"
								className="color"
								style={{
									display: 'none',
									background: 'rgb(0, 0, 0)'
								}}
							/>
						</div>
						<div
							style={{
								display: 'inline-block'
							}}
						>
							<input
								id="primer-color-1-6"
								type="text"
								set={1}
								slot={6}
								style={{
									display: 'none'
								}}
							/>
							<div
								id="primer-color-1-6-target"
								className="color"
								style={{
									display: 'none',
									background: 'rgb(0, 0, 0)'
								}}
							/>
						</div>
						<div
							style={{
								display: 'inline-block'
							}}
						>
							<input
								id="primer-color-1-7"
								type="text"
								set={1}
								slot={7}
								style={{
									display: 'none'
								}}
							/>
							<div
								id="primer-color-1-7-target"
								className="color"
								style={{
									display: 'none',
									background: 'rgb(0, 0, 0)'
								}}
							/>
						</div>
						<div
							style={{
								display: 'inline-block'
							}}
						>
							<input
								id="primer-color-1-8"
								type="text"
								set={1}
								slot={8}
								style={{
									display: 'none'
								}}
							/>
							<div
								id="primer-color-1-8-target"
								className="color"
								style={{
									display: 'none',
									background: 'rgb(0, 0, 0)'
								}}
							/>
						</div>
						<div
							style={{
								display: 'inline-block'
							}}
						>
							<input
								id="primer-color-1-9"
								type="text"
								set={1}
								slot={9}
								style={{
									display: 'none'
								}}
							/>
							<div
								id="primer-color-1-9-target"
								className="color"
								style={{
									display: 'none',
									background: 'rgb(0, 0, 0)'
								}}
							/>
						</div>
						<div
							style={{
								display: 'inline-block'
							}}
						>
							<input
								id="primer-color-1-10"
								type="text"
								set={1}
								slot={10}
								style={{
									display: 'none'
								}}
							/>
							<div
								id="primer-color-1-10-target"
								className="color"
								style={{
									display: 'none',
									background: 'rgb(0, 0, 0)'
								}}
							/>
						</div>
						<div
							style={{
								display: 'inline-block'
							}}
						>
							<input
								id="primer-color-1-11"
								type="text"
								set={1}
								slot={11}
								style={{
									display: 'none'
								}}
							/>
							<div
								id="primer-color-1-11-target"
								className="color"
								style={{
									display: 'none',
									background: 'rgb(0, 0, 0)'
								}}
							/>
						</div>
						<div
							style={{
								display: 'inline-block'
							}}
						>
							<input
								id="primer-color-1-12"
								type="text"
								set={1}
								slot={12}
								style={{
									display: 'none'
								}}
							/>
							<div
								id="primer-color-1-12-target"
								className="color"
								style={{
									display: 'none',
									background: 'rgb(0, 0, 0)'
								}}
							/>
						</div>
						<div
							style={{
								display: 'inline-block'
							}}
						>
							<input
								id="primer-color-1-13"
								type="text"
								set={1}
								slot={13}
								style={{
									display: 'none'
								}}
							/>
							<div
								id="primer-color-1-13-target"
								className="color"
								style={{
									display: 'none',
									background: 'rgb(0, 0, 0)'
								}}
							/>
						</div>
						<div
							style={{
								display: 'inline-block'
							}}
						>
							<input
								id="primer-color-1-14"
								type="text"
								set={1}
								slot={14}
								style={{
									display: 'none'
								}}
							/>
							<div
								id="primer-color-1-14-target"
								className="color"
								style={{
									display: 'none',
									background: 'rgb(0, 0, 0)'
								}}
							/>
						</div>
						<div
							style={{
								display: 'inline-block'
							}}
						>
							<input
								id="primer-color-1-15"
								type="text"
								set={1}
								slot={15}
								style={{
									display: 'none'
								}}
							/>
							<div
								id="primer-color-1-15-target"
								className="color"
								style={{
									display: 'none',
									background: 'rgb(0, 0, 0)'
								}}
							/>
						</div>
					</div>
				</div>
			</div>
			<div
				style={{
					minHeight: '20px'
				}}
			/>
			<div
				style={{
					display: 'inline-block'
				}}
			>
				<div
					style={{
						display: 'inline-block'
					}}
				>
					<div
						style={{
							verticalAlign: 'text-top'
						}}
					>
						<div
							title="Length color is shown."
							timing_group={0}
							timing_idx={0}
							style={{
								width: '460px',
								visibility: 'visible'
							}}
						>
							<span
								style={{
									width: '210px',
									margin: '0px 10px',
									float: 'left',
									verticalAlign: 'top'
								}}
							>
								Strobe
							</span>
							<div
								style={{
									display: 'inline-block',
									width: '210px'
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
										width: '150px',
										float: 'right'
									}}
								>
									<span
										className="ui-slider-handle ui-state-default ui-corner-all"
										tabIndex={0}
										style={{
											left: '4%'
										}}
									/>
								</div>
							</div>
						</div>
						<div
							title="Length blank is shown after each color."
							timing_group={0}
							timing_idx={1}
							style={{
								width: '460px',
								visibility: 'visible'
							}}
						>
							<span
								style={{
									width: '210px',
									margin: '0px 10px',
									float: 'left',
									verticalAlign: 'top'
								}}
							>
								Blank
							</span>
							<div
								style={{
									display: 'inline-block',
									width: '210px'
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
										width: '150px',
										float: 'right'
									}}
								>
									<span
										className="ui-slider-handle ui-state-default ui-corner-all"
										tabIndex={0}
										style={{
											left: '16%'
										}}
									/>
								</div>
							</div>
						</div>
						<div
							title="Length blank is shown after last blank in set."
							timing_group={0}
							timing_idx={2}
							style={{
								width: '460px',
								visibility: 'visible'
							}}
						>
							<span
								style={{
									width: '210px',
									margin: '0px 10px',
									float: 'left',
									verticalAlign: 'top'
								}}
							>
								Gap
							</span>
							<div
								style={{
									display: 'inline-block',
									width: '210px'
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
										width: '150px',
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
							title="Timing for the pattern."
							timing_group={0}
							timing_idx={3}
							style={{
								width: '460px',
								visibility: 'hidden'
							}}
						>
							<span
								style={{
									width: '210px',
									margin: '0px 10px',
									float: 'left',
									verticalAlign: 'top'
								}}
							>
								Timing 0 3
							</span>
							<div
								style={{
									display: 'inline-block',
									width: '210px'
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
										width: '150px',
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
							title="Timing for the pattern."
							timing_group={0}
							timing_idx={4}
							style={{
								width: '460px',
								visibility: 'hidden'
							}}
						>
							<span
								style={{
									width: '210px',
									margin: '0px 10px',
									float: 'left',
									verticalAlign: 'top'
								}}
							>
								Timing 0 4
							</span>
							<div
								style={{
									display: 'inline-block',
									width: '210px'
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
										width: '150px',
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
							title="Timing for the pattern."
							timing_group={0}
							timing_idx={5}
							style={{
								width: '460px',
								visibility: 'hidden'
							}}
						>
							<span
								style={{
									width: '210px',
									margin: '0px 10px',
									float: 'left',
									verticalAlign: 'top'
								}}
							>
								Timing 0 5
							</span>
							<div
								style={{
									display: 'inline-block',
									width: '210px'
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
										width: '150px',
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
							title="Timing for the pattern."
							timing_group={0}
							timing_idx={6}
							style={{
								width: '460px',
								visibility: 'hidden'
							}}
						>
							<span
								style={{
									width: '210px',
									margin: '0px 10px',
									float: 'left',
									verticalAlign: 'top'
								}}
							>
								Timing 0 6
							</span>
							<div
								style={{
									display: 'inline-block',
									width: '210px'
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
										width: '150px',
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
							title="Timing for the pattern."
							timing_group={0}
							timing_idx={7}
							style={{
								width: '460px',
								visibility: 'hidden'
							}}
						>
							<span
								style={{
									width: '210px',
									margin: '0px 10px',
									float: 'left',
									verticalAlign: 'top'
								}}
							>
								Timing 0 7
							</span>
							<div
								style={{
									display: 'inline-block',
									width: '210px'
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
										width: '150px',
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
				</div>
				<div
					style={{
						display: 'none'
					}}
				>
					<div
						style={{
							verticalAlign: 'text-top'
						}}
					>
						<div
							title="Length color is shown."
							timing_group={0}
							timing_idx={0}
							style={{
								width: '460px',
								visibility: 'visible'
							}}
						>
							<span
								style={{
									width: '210px',
									margin: '0px 10px',
									float: 'left',
									verticalAlign: 'top'
								}}
							>
								Strobe
							</span>
							<div
								style={{
									display: 'inline-block',
									width: '210px'
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
										width: '150px',
										float: 'right'
									}}
								>
									<span
										className="ui-slider-handle ui-state-default ui-corner-all"
										tabIndex={0}
										style={{
											left: '2%'
										}}
									/>
								</div>
							</div>
						</div>
						<div
							title="Length blank is shown after each color."
							timing_group={0}
							timing_idx={1}
							style={{
								width: '460px',
								visibility: 'visible'
							}}
						>
							<span
								style={{
									width: '210px',
									margin: '0px 10px',
									float: 'left',
									verticalAlign: 'top'
								}}
							>
								Blank
							</span>
							<div
								style={{
									display: 'inline-block',
									width: '210px'
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
										width: '150px',
										float: 'right'
									}}
								>
									<span
										className="ui-slider-handle ui-state-default ui-corner-all"
										tabIndex={0}
										style={{
											left: '18%'
										}}
									/>
								</div>
							</div>
						</div>
						<div
							title="Length blank is shown after last blank in set."
							timing_group={0}
							timing_idx={2}
							style={{
								width: '460px',
								visibility: 'visible'
							}}
						>
							<span
								style={{
									width: '210px',
									margin: '0px 10px',
									float: 'left',
									verticalAlign: 'top'
								}}
							>
								Gap
							</span>
							<div
								style={{
									display: 'inline-block',
									width: '210px'
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
										width: '150px',
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
							title="Timing for the pattern."
							timing_group={0}
							timing_idx={3}
							style={{
								width: '460px',
								visibility: 'hidden'
							}}
						>
							<span
								style={{
									width: '210px',
									margin: '0px 10px',
									float: 'left',
									verticalAlign: 'top'
								}}
							>
								Timing 1 3
							</span>
							<div
								style={{
									display: 'inline-block',
									width: '210px'
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
										width: '150px',
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
							title="Timing for the pattern."
							timing_group={0}
							timing_idx={4}
							style={{
								width: '460px',
								visibility: 'hidden'
							}}
						>
							<span
								style={{
									width: '210px',
									margin: '0px 10px',
									float: 'left',
									verticalAlign: 'top'
								}}
							>
								Timing 1 4
							</span>
							<div
								style={{
									display: 'inline-block',
									width: '210px'
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
										width: '150px',
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
							title="Timing for the pattern."
							timing_group={0}
							timing_idx={5}
							style={{
								width: '460px',
								visibility: 'hidden'
							}}
						>
							<span
								style={{
									width: '210px',
									margin: '0px 10px',
									float: 'left',
									verticalAlign: 'top'
								}}
							>
								Timing 1 5
							</span>
							<div
								style={{
									display: 'inline-block',
									width: '210px'
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
										width: '150px',
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
							title="Timing for the pattern."
							timing_group={0}
							timing_idx={6}
							style={{
								width: '460px',
								visibility: 'hidden'
							}}
						>
							<span
								style={{
									width: '210px',
									margin: '0px 10px',
									float: 'left',
									verticalAlign: 'top'
								}}
							>
								Timing 1 6
							</span>
							<div
								style={{
									display: 'inline-block',
									width: '210px'
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
										width: '150px',
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
							title="Timing for the pattern."
							timing_group={0}
							timing_idx={7}
							style={{
								width: '460px',
								visibility: 'hidden'
							}}
						>
							<span
								style={{
									width: '210px',
									margin: '0px 10px',
									float: 'left',
									verticalAlign: 'top'
								}}
							>
								Timing 1 7
							</span>
							<div
								style={{
									display: 'inline-block',
									width: '210px'
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
										width: '150px',
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
				</div>
			</div>
		</div>
	);
}
