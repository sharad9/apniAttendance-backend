const mongoose = require("mongoose");
const express = require("express");
const dotenv = require('dotenv');
dotenv.config({ path: './configuration.env' });
const dbUrl = process.env.DBURL

mongoose.connect(dbUrl, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
		(err) => {
			err && console.error(err);
			console.log("Successfully connected to MongoDB: college");
		}
	);


const app = require('./app');
app.listen(port = process.env.PORT, ()=>{
	console.log(`Listening on port ${port}`);
} );