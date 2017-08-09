import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import { changeSelectedDate } from '../../actions';

import 'react-datepicker/dist/react-datepicker.css';
import './style.css';

class SelectDateContainer extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(date) {
		const { dispatch } = this.props;
		dispatch(changeSelectedDate(date));
	}

	componentDidMount() {
		const { dispatch, selectedDate } = this.props;
		dispatch(changeSelectedDate(selectedDate));
	}

	render() {
		const { selectedDate } = this.props;
		return (
			<div className="select-date-container">
				Select Date:
				<DatePicker
					selected={selectedDate}
					onChange={this.handleChange} />
			</div >
		);
	}
}

function mapStateToProps(state) {
	const { selectedDate } = state;
	return {
		selectedDate
	};
}

export default connect(mapStateToProps)(SelectDateContainer);
