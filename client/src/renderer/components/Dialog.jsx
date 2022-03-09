import React from 'react';
export default function Dialog({}) {
	return (
		<dialog>
			<p />
			<button id="close-dialog">OK</button>
			<dialog />
		</dialog>
	);
}
