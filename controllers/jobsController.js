const db = require("../models");

// Defining methods for the booksController
module.exports = {
	findAll: function (req, res) {
		db.Job
			.find(req.query)
			.sort({ date: 1 })
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	findById: function (req, res) {
		// console.log("Req.params: ", req.params);
		db.Job
			.findOne({jobNumber: req.params.id})
			.then(dbModel => { 
				// console.log("Hitting the findById", dbModel);
				res.json(dbModel)})
			.catch(err => res.status(422).json(err));
	},
	create: function (req, res) {
		db.Job
			.create(req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	update: function (req, res) {
		db.Job
			.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	remove: function (req, res) {
		db.Job
			.findById({ _id: req.params.id })
			.then(dbModel => dbModel.remove())
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	}
};
