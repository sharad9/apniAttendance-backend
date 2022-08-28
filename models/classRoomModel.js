const mongoose = require("mongoose");
const classRoomSchema = new mongoose.Schema({
	course: {
		type: String,
		required: true
	},
	branch: {
		type: String,
		enum: ["CSE", "CS", "CS-IT", "IT", "ECE", "EE", "EN", "ME", "CE"],
		required: true
	},
	section: {
		type: Number,
		required: true
	},
	subjectCode:{
		type:String,
		required:true
	},
	date:{
		type:Date,
		required:true
	},
	startedAt:{
		type:String,
		required: true
	},
	finishedAt:{
		type:String,
		required: true
	},
	status:{
		type:String,
		default:"ongoing",
		enum:["ongoing","finished","error"]
	}

});
module.exports = mongoose.model("classRoom", classRoomSchema);

