import { html } from 'htm/preact';
import { useState } from 'preact/hooks';

function TestComponent({ count = 0 }) {
	const [counter, setCounter] = useState(parseInt(count, 10));

	const inc = () => {
		setCounter(counter + 1);
	};

	const dec = () => {
		setCounter(counter - 1);
	};

	return html`
		<div>
			<span>Counter: ${counter}</span>
			<button onClick=${inc}>+</button>
			<button onClick=${dec}>-</button>
		</div>
	`;
}

export default TestComponent;
