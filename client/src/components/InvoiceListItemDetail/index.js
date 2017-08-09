import React, { Component } from 'react';

import './style.css';

export class InvoiceListItem extends Component {
	render() {
		const { account_number, account_name, amount } = this.props;
		return (
			<tr>
				<td>{account_number}</td>
				<td>{account_name}</td>
				<td>{amount}</td>
			</tr>
		);
	}
}

export default InvoiceListItem;
