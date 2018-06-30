const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const materialSchema = new Schema({
	name: { type: String, required: true, trim: true },
	sku: { type: Number, required: true, trim: true },
	quantity: {type: Number }
	
});

const Material= mongoose.model("Material", materialSchema);

module.exports = Material;

