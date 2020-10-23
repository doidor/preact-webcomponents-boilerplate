import { html } from 'htm/preact';

function AnotherComponent() {
	return html`
		<h1>Another component</h1>
		<div>
			<test-component count="20"></test-component>
		</div>
	`;
}

export default AnotherComponent;
