import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import counterSlice from './features/counter';

const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
	},
	//middleware: (defaults) => defaults().concat(thunkMiddleware),
	//devTools: true,
});

import 'mvp.css';
import './global.css';

import "preact/debug";
import { h, render } from 'preact';
/** @jsx h */

import { Provider } from 'react-redux'
import Router from 'preact-router';
import Home from './pages/Home';
import Page2 from './pages/Page2';

function Index() {
	return (
		<Provider store={store}>
			<Router>
				<Home path="/" />        
				<Page2 path="/p2" />
			</Router>
		</Provider>
	);
};

render(<Index/>, document.body);