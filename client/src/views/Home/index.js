import React from 'react';
import { pageWithLayout } from '../../containers/page';
import HomeContainer from '../../containers/HomeContainer';

import './style.css';

export const Home = props => (
	<HomeContainer />
)

export default pageWithLayout(Home);
