const moment = require('moment');

const currentDate = moment();
let mockData = [
	{
		id: 1,
		time: currentDate.unix(),
		date: currentDate.format('LL'),
		fiscal_period: 1,
		fiscal_year: 2017,
		vendor: 'PFS',
		amount: 100,
		detail: [
			{
				id: 1,
				parent: 1,
				account_number: '1102',
				account_name: 'Bakery',
				amount: 50
			},
			{
				id: 2,
				parent: 1,
				account_number: '1103',
				account_name: 'Dairy',
				amount: 50
			}
		]
	},
	{
		id: 2,
		time: currentDate.unix(),
		date: currentDate.format('LL'),
		fiscal_period: 1,
		fiscal_year: 2017,
		vendor: 'Seaworld',
		amount: 25.3,
		detail: [
			{
				id: 1,
				parent: 2,
				account_number: '1101',
				account_name: 'Seafood',
				amount: 25.3
			}
		]
	},
	{
		id: 3,
		time: currentDate.unix(),
		date: currentDate.format('LL'),
		fiscal_period: 1,
		fiscal_year: 2017,
		vendor: 'Pepsi',
		amount: 50,
		detail: [
			{
				id: 1,
				parent: 3,
				account_number: '1100',
				account_name: 'NA Bev',
				amount: 50
			}
		]
	},
	{
		id: 4,
		time: currentDate.add(-1, 'day').unix(),
		date: currentDate.format('LL'),
		fiscal_period: 1,
		fiscal_year: 2017,
		vendor: 'Tres Monjitas',
		amount: 15.99,
		detail: [
			{
				id: 1,
				parent: 4,
				account_number: '1103',
				account_name: 'Dairy',
				amount: 15.99
			}
		]
	},
]

let getInvoices = (req, res) => {
	const { search } = req.query;
	if (search) {
		const date = moment(parseInt(search));
		var invoices = mockData.filter((invoice) => {
			return date.isSame(moment.unix(invoice.time), 'day');
		});
		if (invoices.length !== 0) {
			res.json({
				date: date.unix(),
				invoices
			});
		} else {
			res.sendStatus(404);
		}
	} else {
		res.sendStatus(500);
	}
}



module.exports = {
	getInvoices
}
