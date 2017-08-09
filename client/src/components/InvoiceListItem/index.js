import React, { Component } from 'react';
import InvoiceListItemDetail from '../InvoiceListItemDetail';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

import './style.css';

export class InvoiceListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isExpanded: false
		};
		this.handleChangeExpand = this.handleChangeExpand.bind(this);
		this.handleEditClick = this.handleEditClick.bind(this);
	}

	handleChangeExpand() {
		this.setState({
			isExpanded: !this.state.isExpanded
		});
	}

	handleEditClick() {

	}

	render() {
		const { id, date, vendor, amount, detail } = this.props;
		const { isExpanded } = this.state;
		const renderDetail = detail.map((line) => {
			return (<InvoiceListItemDetail key={`${line.parent}_${line.id}`} {...line} />)
		});
		return (
			<tbody>
				<tr className="invoice-list-item">
					<td className="invoice-chevron" onClick={this.handleChangeExpand}>
						{
							isExpanded && <FontAwesome name="chevron-down" />
						}
						{
							!isExpanded && <FontAwesome name="chevron-right" />
						}
					</td>
					<td className="invoice-date">{date}</td>
					<td className="invoice-vendor">{vendor}</td>
					<td className="invoice-amount">{amount}</td>
					<td className="invoice-actions"><Link to={{
						pathname: `/invoice/${id}`,
						state: { invoice: this.props }
					}} >Edit</Link></td>
				</tr>
				{
					isExpanded &&
					<tr>
						<td colSpan="5">
							<table>
								<thead>
									<tr>
										<th >Account Number</th>
										<th >Account Name</th>
										<th >Amount</th>
									</tr>
								</thead>
								<tbody>
									{
										renderDetail
									}
								</tbody>
							</table>
						</td>
					</tr>
				}
			</tbody>
		);
	}
}

export default InvoiceListItem;
