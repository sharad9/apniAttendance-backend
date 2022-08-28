const classRoom = require('../models/classRoomModel');

exports.register = async (req, res, error) => {
	const classRoomExists = await classRoom.exists({ course: req.body.course, branch: req.body.branch, section: req.body.section, subjectCode: req.body.subjectCode, date: req.body.date, startedAt: req.body.startedAt});
	
	const newclassRoom = new classRoom(req.body);
	const validationError = newclassRoom.validateSync();
	if (!validationError) {
		try {
			if ((classRoomExists == null)) {
				try {

					await newclassRoom.save();
					res.status(201).json({
						status: "success",
						body: {
							newclassRoom,
						}

					});
				} catch (error) {
					console.log("Error : ", error);

				}


			} else {
				res.status(201).json({
					status: classRoomExists ? "classRoomExists"
						
								: "Duplicacy"
					,



					body: req.body

				});
			}
		} catch (error) {
			console.log("Error : ", error);

		}

	} else {
		res.status(201).json({
			status: "validationError",
			body: {
				validationError,
			}

		});
	}







};

// exports.delete = async (req, res, error) => {

// 	classRoom.deleteOne({ classRoomNo: req.params.classRoomNo }).then(function () {
// 		res.status(201).json({
// 			status: "deleted",
// 			body: {
// 				classRoomNo: req.params.classRoomNo
// 			}

// 		});
// 	}).catch(function (error) {
// 		res.status(201).json({
// 			status: "deletionFailed",
// 			body: {
// 				classRoomNo: req.params.classRoomNo
// 			}

// 		});
// 	});

// }