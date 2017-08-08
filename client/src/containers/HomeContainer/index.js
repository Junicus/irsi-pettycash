import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import { changeSelectedDate } from '../../actions';

import 'react-datepicker/dist/react-datepicker.css';

class HomeContainer extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(date) {
		const { dispatch } = this.props;
		dispatch(changeSelectedDate(date));
	}

	render() {
		const { selectedDate } = this.props;
		return (
			< div className="home" >
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

export default connect(mapStateToProps)(HomeContainer);
