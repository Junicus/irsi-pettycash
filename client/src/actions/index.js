export const CHANGE_SELECTED_DATE = "CHANGE_SELECTED_DATE";
export function setSelectedDate(date) {
	return {
		type: CHANGE_SELECTED_DATE,
		date
	}
}

export function changeSelectedDate(date) {
	return (dispatch, getState) => {
		const { selectedDate, invoiceList } = getState();
		if (!date.isSame(selectedDate, 'day') || invoiceList.invoices.length === 0) {
			dispatch(setSelectedDate(date));
			dispatch(getInvoiceList(date));

			fetch(`/api/invoices?search=${date}`)
				.then(response => {
					if (response.status === 200) {
						return response.json();
					} else {
						throw Error(response.Error);
					}
				})
				.then(json => {
					console.log('fetch: ', json);
					dispatch(setInvoiceList(json));
				}).catch(error => console.log);
		}
	}
}

export const REQUEST_INVOICES = 'REQUEST_INVOICES';
export const RECEIVED_INVOICES = 'RECEIVED_INVOICES';
export function getInvoiceList(date) {
	return {
		type: REQUEST_INVOICES,
		date
	}
}

export function setInvoiceList(json) {
	return {
		type: RECEIVED_INVOICES,
		json
	}
}

export const CHANGE_SELECTED_INVOICE = 'CHANGE_SELECTED_INVOICE';
export function setSelectedInvoiceId(id) {
	return {
		type: CHANGE_SELECTED_INVOICE,
		id
	}
}

export function changeSelectedInvoice(id) {
	return (dispatch) => {
		dispatch(setSelectedInvoiceId(id));
		dispatch(getSelectedInvoice(id));

		fetch(`/api/invoices/${id}`)
			.then(response => {
				if (response.status === 200) {
					return response.json();
				} else {
					throw Error(response.Error);
				}
			})
			.then(json => {
				console.log('fetch: ', json);
				dispatch(setSelectedInvoice(json));
			}).catch(error => console.log);
	}
}

export const REQUEST_INVOICE = 'REQUEST_INVOICE';
export const RECEIVE_INVOICE = 'RECEIVE_INVOICE';
export function getSelectedInvoice(id) {
	return {
		type: REQUEST_INVOICE,
		id
	}
}

export function setSelectedInvoice(json) {
	return {
		type: RECEIVE_INVOICE,
		json
	}
}
