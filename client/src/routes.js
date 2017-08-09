import React from 'react';
import { Route } from 'react-router-dom';
import { pageWithoutLayout } from './containers/page';

import Home from './views/Home';
import About from './views/About';
import EditInvoice from './views/EditInvoice';

export const Routes = props => (
	<div className="app">
		<Route path="/" exact render={(renderProps) => (<Home {...props} {...renderProps} />)} />
		<Route path="/about" render={(renderProps) => (<About {...props} {...renderProps} />)} />
		<Route path="/invoice/:id" render={(renderProps) => (<EditInvoice {...props} {...renderProps} />)} />
	</div>
);

export default pageWithoutLayout(Routes);
