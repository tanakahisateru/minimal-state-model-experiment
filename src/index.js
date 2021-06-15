import 'mvp.css';
import './global.css';

window.__DEV__ = false;

// import "preact/debug";
import { h, render } from 'preact';
/** @jsx h */

import { Counter, CounterContext } from './features/counter';
import { useStateClass } from './lib/plux';

import Router from 'preact-router';
import Home from './pages/Home';
import Page2 from './pages/Page2';
import {useReducer} from "preact/hooks";

function Index() {
	const stateContext = useStateClass(Counter, {
		params: [1],
		// reducerHook: useReducer,
		// debug: true,
	});
	return (
		<CounterContext.Provider value={ stateContext }>
			<Router>
				<Home path="/" />
				<Page2 path="/p2" />
			</Router>
		</CounterContext.Provider>
	);
}

render(<Index/>, document.body);
