import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import Root from './components/root';
import '../node_modules/antd/dist/antd.css';

render(
	<Provider store={store}>
		<Root />
	</Provider>,
	document.getElementById('main')
);
