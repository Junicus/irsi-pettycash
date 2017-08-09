import React from 'react';
import { pageWithLayout } from '../../containers/page';
import SelectDateContainer from '../../containers/SelectDateContainer';
import InvoiceList from '../../containers/InvoiceList';

import './style.css';

export const Home = props => (
	<div>
		<SelectDateContainer />
		<InvoiceList />
	</div>
)

export default pageWithLayout(Home);
