const servicesController = require('../api/controllers/servicesController');


module.exports = (app) => {

	app.get('/api/services', servicesController.getAll)

	app.get('/api/services/getById', servicesController.getById);

	app.get('/api/services/getByCategory', servicesController.getByCategory);

	app.get('/api/services/getByName', servicesController.getByName);

	app.post('/api/makeBooking', servicesController.makeBooking);
};