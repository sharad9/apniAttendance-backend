const mongoose = require("mongoose");
const classRoom = require('../models/classRoomModel');

const student = require('../models/studentModel');

const attendanceMarkedSchema = mongoose.Schema({

	classRoom:classRoom,
	student: student,
	


	
});

module.exports = mongoose.model("attendanceMarked", attendanceMarkedSchema);

