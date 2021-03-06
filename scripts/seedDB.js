const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the materials collection and inserts the books below

mongoose.connect(
	process.env.MONGODB_URI || `mongodb://localhost:27017/simDB`,
	{ useNewUrlParser: true });

const materialSeed = [
	{
		name: '1/4" Flat Stock Alloy Steel',
	sku: '2hkd9',
	materialQuantity: 5,
	price: 5.20
	},
	{
		name: '1/2" Flat Stock Alloy Steel',
	sku: '2hkf6',
	materialQuantity: 5,
	price: 7.40
	},
	{
		name: '3/4" Flat Stock Alloy Steel',
	sku: '2hkg1',
	materialQuantity: 5,
	price: 4.45
	},
	{
		name: '1" Flat Stock Alloy Steel',
	sku: '2hgf1',
	materialQuantity: 5,
	price: 6.20
	},
	{
		name: '1/2 " Flat Stock Alloy Steel',
	sku: '1UXG6',
	materialQuantity: 5,
	price: 6.20
	},
	{
		name: '3/4" Flat Stock Alloy Steel',
	sku: '1UXf2',
	materialQuantity: 5,
	price: 7.20
	}
];

db.Material
	.remove({})
	.then(() => db.Material.collection.insertMany(materialSeed))
	.then(data => {
		console.log(data.insertedIds.length + " materials records inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});
