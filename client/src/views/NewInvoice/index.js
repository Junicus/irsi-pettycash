import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pageWithLayout } from '../../containers/page';

import './style.css';

export class NewInvoice extends Component {
	render() {
		const { dispatch } = this.props;
		return (
			<div>
				New Invoice
			</div>
		);
	}
}

function mapStateToProps(state) {
	return state;
}

export default pageWithLayout(connect(mapStateToProps)(NewInvoice));
