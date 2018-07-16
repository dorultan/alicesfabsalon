const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config();
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;



 mongoose.connect(`mongodb://${DB_USER}:${DB_PASS}@ds161780.mlab.com:61780/alicesfabshop`, {}, function(err, res) {
 	if(err) {
 		console.log(err);
 	}
 });



module.exports = mongoose;