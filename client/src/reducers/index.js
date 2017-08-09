import { combineReducers } from 'redux';
import { selectedDate } from './selectedDate';
import { invoiceList } from './invoiceList';
import { selectedInvoice } from './selectedInvoice';

export const rootReducer = combineReducers({
	selectedDate,
	invoiceList,
	selectedInvoice
});
