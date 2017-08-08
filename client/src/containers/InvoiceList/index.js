import React, { Component } from 'react';
import { connect } from 'react-redux';
import InvoiceListItem from '../../components/InvoiceListItem';
import InvoiceListItemDetail from '../../components/InvoiceListItemDetail';

import './style.css';

class InvoiceList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isExpanded: []
		}
	}

	render() {
		const { invoiceList } = this.props;
		const { isExpanded } = this.state;
		const invoices = invoiceList.invoices.map((invoice) => {
			return (

				<InvoiceListItem key={invoice.id} {...invoice} />

			);
		});
		return (
			<div>
				{
					invoiceList.isFetching && <div>Loading...</div>
				}
				{
					!invoiceList.isFetching && invoiceList.invoices.length !== 0 &&
					<table className="invoice-list">
						<thead>
							<tr>
								<th></th>
								<th>Date</th>
								<th>Vendor</th>
								<th>Amount</th>
								<th></th>
							</tr>
						</thead>
						{
							invoices
						}
					</table>
				}
			</div>);
	}
}

function mapStateToProps(state) {
	const { invoiceList } = state;
	return {
		invoiceList
	};
}

export default connect(mapStateToProps)(InvoiceList);
