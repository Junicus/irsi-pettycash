import React from 'react';
import { Route } from 'react-router-dom';
import { pageWithoutLayout } from './containers/page';
import { EditInvoice } from './components/EditInvoice';

import Home from './views/Home';
import About from './views/About';

export const Routes = props => (
	<div className="app">
		<Route path="/" exact render={(renderProps) => (<Home {...props} {...renderProps} />)} />
		<Route path="/about" render={(renderProps) => (<About {...props} {...renderProps} />)} />
		<Route path="/invoice/:id" render={(renderProps) => (<EditInvoice {...props} {...renderProps} />)} />
	</div>
);

export default pageWithoutLayout(Routes);
