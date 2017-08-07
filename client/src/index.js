import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store';

import './index.css';

const MOUNT = document.getElementById('root');
const renderRoutes = Comp => ReactDOM.render(Comp, MOUNT);

if (module.hot) {
	module.hot.accept('./routes', () => {
		const NextRoutes = require('./routes').default
		renderRoutes(
			<Provider store={store}>
				<NextRoutes />
			</Provider>
		);
	});
}

renderRoutes(
	<Provider store={store}>
		<Routes />
	</Provider>
);

registerServiceWorker();
