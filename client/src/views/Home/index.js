import React from 'react';
import { pageWithLayout } from '../../containers/page';
import HomeContainer from '../../containers/HomeContainer';
import InvoiceList from '../../containers/InvoiceList';

import './style.css';

export const Home = props => (
	<div>
		<HomeContainer />
		<InvoiceList />
	</div>
)

export default pageWithLayout(Home);
