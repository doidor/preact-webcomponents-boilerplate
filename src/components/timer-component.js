import { html } from 'htm/preact';
import { useState, useEffect } from 'preact/hooks';

function TimerComponent() {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			setCounter(counter + 1);
		}, 1000);
	});

	return html`
		<div>
			<span>Passed seconds since mount: ${counter}</span>
		</div>
	`;
}

export default TimerComponent;
