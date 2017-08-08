let getApi = (req, res) => {
	res.sendStatus(200);
}

let getInvoices = (req, res) => {
	const { date } = req.query;
	console.log(date);
	if (date) {
		res.json({
			date: 'Aug 7, 2017',
			invoices: [
				{
					time: 'xxx',
					date: 'Aug 7, 2017',
					vendor: 'PFS',
					amount: 100.00,
					detail: [
						{
							category: 'Poultry',
							amount: 50.00
						},
						{
							category: 'Meat',
							amount: 50.00
						}
					]
				}
			]
		});
	} else {
		res.json({
			date: 'Aug 7, 2017',
			invoices: []
		});
	}
}



module.exports = {
	getApi,
	getInvoices
}
