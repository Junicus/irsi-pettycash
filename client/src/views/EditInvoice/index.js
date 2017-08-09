import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pageWithLayout } from '../../containers/page';
import { EditInvoiceForm } from '../../components/EditInvoiceForm';
import { changeSelectedInvoice, getSelectedInvoice } from '../../actions';

import './style.css';

export class EditInvoice extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		const { id } = this.props.match.params;
		dispatch(changeSelectedInvoice(id));
		dispatch(getSelectedInvoice(id));
	}

	render() {
		const { dispatch, selectedInvoice } = this.props;
		return (
			<div>
				{
					selectedInvoice.isFetching && <div>Loading...</div>
				}
				{
					!selectedInvoice.isFetching && selectedInvoice.invoice && <EditInvoiceForm {...selectedInvoice.invoice} dispatch={dispatch} />
				}
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { selectedInvoice } = state;
	return { selectedInvoice };
}

export default pageWithLayout(connect(mapStateToProps)(EditInvoice));
