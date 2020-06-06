import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom'
import store from './store';
import Root from './components/root';
import '../node_modules/antd/dist/antd.css';
import history from './history'

render(
	<Provider store={store}>
		<Router history={history}>
			<Root />
		</Router>
	</Provider>,
	document.getElementById('main')
);
