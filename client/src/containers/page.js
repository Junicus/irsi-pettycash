import withRouter from './withRouter';
import withSidebarLayout from './withSidebarLayout';

export const pageWithoutLayout = Wrapped => {
	return withRouter(Wrapped);
}

export const pageWithLayout = Wrapped => {
	return withSidebarLayout(Wrapped);
}

