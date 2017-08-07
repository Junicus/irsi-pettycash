export const CHANGE_SELECTED_DATE = "CHANGE_SELECTED_DATE";

export function changeSelectedDate(date) {
	return {
		type: CHANGE_SELECTED_DATE,
		date
	}
}
