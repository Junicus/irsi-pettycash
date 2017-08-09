import { REQUEST_INVOICES, RECEIVED_INVOICES } from '../actions';

const initialState = {
	isFetching: false,
	isDirty: false,
	invoices: []
}

export function invoiceList(state = initialState, action) {
	switch (action.type) {
		case REQUEST_INVOICES:
			return Object.assign({}, state, { isFetching: true });
		case RECEIVED_INVOICES:
			return Object.assign({}, state, {
				isFetching: false, invoices: action.json.invoices.map((invoice) => {
					return invoice;
				})
			});
		default:
			return state;
	}
}
