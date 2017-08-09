import { CHANGE_SELECTED_INVOICE, REQUEST_INVOICE, RECEIVE_INVOICE } from '../actions';
import moment from 'moment';

const initialState = {
	isFetching: false,
	invoice: null
}

export function selectedInvoice(state = initialState, action) {
	switch (action.type) {
		case REQUEST_INVOICE:
			return Object.assign({}, state, { isFetching: true });
		case RECEIVE_INVOICE:
			return Object.assign({}, state, { isFetching: false, invoice: action.json });
		default:
			return state;
	}
}
