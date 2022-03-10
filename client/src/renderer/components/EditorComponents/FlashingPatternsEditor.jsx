import React from 'react';
export default function FlashingPatternsEditor({}) {
	return (
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
						timing_group={1}
						timing_idx={0}
						style={{
							width: '230px',
							visibility: 'visible'
						}}
					>
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
						timing_group={1}
						timing_idx={1}
						style={{
							width: '230px',
							visibility: 'visible'
						}}
					>
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
						timing_group={1}
						timing_idx={2}
						style={{
							width: '230px',
							visibility: 'visible'
						}}
					>
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
						timing_group={1}
						timing_idx={3}
						style={{
							width: '230px',
							visibility: 'hidden'
						}}
					>
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
						timing_group={1}
						timing_idx={4}
						style={{
							width: '230px',
							visibility: 'hidden'
						}}
					>
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
						timing_group={1}
						timing_idx={5}
						style={{
							width: '230px',
							visibility: 'hidden'
						}}
					>
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
						timing_group={1}
						timing_idx={6}
						style={{
							width: '230px',
							visibility: 'hidden'
						}}
					>
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
						timing_group={1}
						timing_idx={7}
						style={{
							width: '230px',
							visibility: 'hidden'
						}}
					>
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
						timing_group={2}
						timing_idx={0}
						style={{
							width: '230px',
							visibility: 'visible'
						}}
					>
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
										left: '0.4%'
									}}
								/>
							</div>
						</div>
					</div>
					<div
						title="Length blank is shown after each color."
						timing_group={2}
						timing_idx={1}
						style={{
							width: '230px',
							visibility: 'visible'
						}}
					>
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
										left: '19.6%'
									}}
								/>
							</div>
						</div>
					</div>
					<div
						title="Length blank is shown after last blank in set."
						timing_group={2}
						timing_idx={2}
						style={{
							width: '230px',
							visibility: 'visible'
						}}
					>
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
						timing_group={2}
						timing_idx={3}
						style={{
							width: '230px',
							visibility: 'hidden'
						}}
					>
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
						timing_group={2}
						timing_idx={4}
						style={{
							width: '230px',
							visibility: 'hidden'
						}}
					>
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
						timing_group={2}
						timing_idx={5}
						style={{
							width: '230px',
							visibility: 'hidden'
						}}
					>
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
						timing_group={2}
						timing_idx={6}
						style={{
							width: '230px',
							visibility: 'hidden'
						}}
					>
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
						timing_group={2}
						timing_idx={7}
						style={{
							width: '230px',
							visibility: 'hidden'
						}}
					>
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
	);
}
