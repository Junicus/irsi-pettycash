import React, { Component } from 'react';

export class EditInvoiceForm extends Component {
	constructor(props) {
		super(props);
		this.state = Object.assign({}, this.props, { isDirty: false });
		this.handleChange = this.handleChange.bind(this);
		this.handleOnSubmit = this.handleOnSubmit.bind(this);
	}

	handleChange(e) {
		const { target } = e;
		this.setState({
			isDirty: true,
			[target.id]: target.value
		});
	}

	handleOnSubmit(e) {
		e.preventDefault();
		console.log('submit: ', e.target, 'state: ', this.state);
	}

	render() {
		const { vendor } = this.state;
		return (
			<form onSubmit={this.handleOnSubmit} >
				<label>
					Vendor:
				<input id="vendor" type="text" placeholder="vendor" value={vendor} onChange={this.handleChange} />
				</label>
				<input disabled={!this.state.isDirty} type="submit" value="Submit" />
			</form>
		);
	}
}

export default EditInvoiceForm;
