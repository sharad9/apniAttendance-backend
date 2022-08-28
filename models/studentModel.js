const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
	email:{
		type:String,
		required:true,
		unique:true	
	},
	rollNo:{
		type:Number,
		unique:true,
		required:true
	},
	studentNo:{
		type:Number,
		unique:true,
		required:true
	},
	course:{
		type:String,
		required:true
	},
	branch:{
		type:String,
		enum: ["CSE", "CS", "CS-IT", "IT", "ECE", "EE","EN","ME","CE"],
		required: true
	},
	section:{ 
		type:Number,
		required: true
	}
});

module.exports = mongoose.model("students", studentSchema);

