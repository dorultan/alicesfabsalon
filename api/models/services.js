const mongoose = require('../../config/mongoose');
const Schema = mongoose.Schema;

const Services = {};

const ServicesSchema = new Schema(Services);

const ServicesClass = mongoose.model('Services', ServicesSchema);

module.exports = ServicesClass;