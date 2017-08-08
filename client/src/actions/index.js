export const CHANGE_SELECTED_DATE = "CHANGE_SELECTED_DATE";
export const REQUEST_INVOICES = 'REQUEST_INVOICES';
export const RECEIVED_INVOICES = 'RECEIVED_INVOICES';

export function setSelectedDate(date) {
	return {
		type: CHANGE_SELECTED_DATE,
		date
	}
}

export function changeSelectedDate(date) {
	return (dispatch) => {
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
