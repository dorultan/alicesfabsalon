const ServicesModel = require('../models/services');
const sendMail = require('../services/mail');

module.exports = {

	getAll: (req, res) => {
		ServicesModel.find(function(err, data){
			if(err) {
				return 	res.status(404).json({message: err})
			}
			else {
				return res.status(200).json(data);
			}
		})
	},

	getByCategory: (req, res) => {
		const category = req.query.category;

		ServicesModel.find({
			category: category
		}, function(err, data) {

			if(err) {
				return res.status(404).json({message: "I can't find anything after query: " + category})
			}

			res.status(200).json(data);
		})
	},

	getById: (req, res) => {
		const id = req.params.id;

		ServicesModel.findById(id, function(err, data) {

			if(err) {
				return res.status(404).json({message: "I can't find anything with this id: " + id});
			}

			res.status(200).json(data);
		})
	},

	getByName: (req, res) => {
		const name = req.query.name;

		ServicesModel.findOne({
			name: name
		}, function(err, data) {

			if(err) {

				return res.status(404).json({message: "I can't find anything with this name: " + name});
			}

			res.status(200).json(data);
		})
	},

	makeBooking: (req, res) => {

		// sendMail(req.body);

		res.status(200).json({success: true});
	}
}