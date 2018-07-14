const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AutoIncrement = require ("mongoose-sequence")(mongoose);

const jobSchema = new Schema({
	jobNumber: { type: Number, trim: true, unique: true },
	sku: { type: String, required: true, trim: true },
<<<<<<< HEAD
	partName: {type: String, trim: true},
	partPrice: { type: Number },
	partQuantity: {type: Number },
	date: {type: Date },
	material: { type: String, required: true, trim: true},
	materialQuantity: {type: Number},
	notes:{type: String},

=======
	quantity: {type: Number },
	username: {type: String, trim: true},
	date: {type: Date },
	notes: {type: String, trim: true}
>>>>>>> master
});
jobSchema.plugin(AutoIncrement, {inc_field: "jobNumber"});

const Job= mongoose.model("Job", jobSchema);

module.exports = Job;