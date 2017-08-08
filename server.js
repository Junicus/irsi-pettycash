const express = require('express');
const apiController = require('./controllers/api');

const app = express();

app.set('port', process.env.PORT || 3001);

app.get('/api/invoices', apiController.getInvoices);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

app.listen(app.get('port'), () => {
	console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});
