import React from 'react';

export const withSidebarLayout = Wrapped => props => {
	return (
		<div className="wrapper">
			<div className="container">
				<div className="content">
					<Wrapped {...props} />
				</div>
			</div>
		</div>
	)
}

export default withSidebarLayout;
