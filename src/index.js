import '@webcomponents/webcomponentsjs';

import register from 'preact-custom-element';

import TestComponent from './components/test-component';
import AnotherComponent from './components/another-component';

register(TestComponent, 'test-component', ['count']);
register(AnotherComponent, 'another-component', []);