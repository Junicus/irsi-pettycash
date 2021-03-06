import { CHANGE_SELECTED_DATE } from '../actions';
import moment from 'moment';

const initialState = {
	selectedDate: moment()
}

export function selectedDate(state = initialState, action) {
	switch (action.type) {
		case CHANGE_SELECTED_DATE:
			return action.date;
		default:
			return state;
	}
}
