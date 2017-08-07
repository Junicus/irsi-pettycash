import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomeContainer extends Component {
	render() {
		const { selectedDate } = this.props;
		return (
			< div className="home" >
				<h2>{selectedDate}</h2>
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
