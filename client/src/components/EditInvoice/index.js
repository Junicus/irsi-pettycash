import React from 'react';

export const EditInvoice = props => (
	<div>
		<div>Edit Form ({props.match.params.id})</div>
		<div>{JSON.stringify(props)}</div>
	</div>
);

export default EditInvoice;
