import React from 'react';
export default function TopAccelSlider({}) {
	return (
		<div
			style={{
				margin: '10px'
			}}
		>
			<div className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all ui-limitslider">
				<div
					className="ui-slider-range ui-widget-header range-2 ui-slider-range-max"
					style={{
						width: '37.5%'
					}}
				/>
				<div
					className="ui-slider-range ui-widget-header range-12"
					style={{
						width: '0%',
						left: '62.5%'
					}}
				/>
				<div
					className="ui-slider-range ui-widget-header range-1"
					style={{
						width: '46.875%',
						left: '15.625%'
					}}
				/>
				<div
					className="ui-slider-range ui-widget-header range-01"
					style={{
						width: '0%',
						left: '15.625%'
					}}
				/>
				<div
					className="ui-slider-range ui-widget-header range-0 ui-slider-range-min"
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
				<span
					className="ui-slider-handle ui-state-default ui-corner-all"
					tabIndex={0}
					style={{
						left: '62.5%'
					}}
				/>
				<span
					className="ui-slider-handle ui-state-default ui-corner-all"
					tabIndex={0}
					style={{
						left: '62.5%'
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
	);
}
