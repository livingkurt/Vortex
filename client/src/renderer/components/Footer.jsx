import React from 'react';
export default function Footer({}) {
	return (
		<div id="footer">
			<span
				style={{
					marginLeft: '15px',
					float: 'left',
					fontWeight: 'bold'
				}}
			>
				A John "iterati" Miller project
			</span>
			<a
				href="http://iterati.github.io"
				target="_blank"
				style={{
					color: 'black',
					textDecoration: 'none',
					marginRight: '15px',
					float: 'right',
					fontWeight: 'bold'
				}}
			>
				Blog Link
			</a>
		</div>
	);
}
