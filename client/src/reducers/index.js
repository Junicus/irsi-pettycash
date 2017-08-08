import { combineReducers } from 'redux';
import { selectedDate } from './selectedDate';
import { invoiceList } from './invoiceList';

export const rootReducer = combineReducers({
	selectedDate,
	invoiceList
});
