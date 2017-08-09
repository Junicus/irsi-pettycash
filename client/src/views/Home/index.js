import React from 'react';
import { pageWithLayout } from '../../containers/page';
import SelectDateContainer from '../../containers/SelectDateContainer';
import InvoiceList from '../../containers/InvoiceList';
import { Link } from 'react-router-dom';

import './style.css';

export const Home = props => (
	<div>
		<div>
			<SelectDateContainer />
			<Link to={{
				pathname: `/invoice`
			}} >New Invoice</Link>
		</div>
		<InvoiceList />
	</div>
)

export default pageWithLayout(Home);
