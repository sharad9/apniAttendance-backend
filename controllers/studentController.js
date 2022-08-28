

const student = require('../models/studentModel');

exports.register = async (req, res, error) => {
	const studentEmailExists = await student.exists({ email: req.body.email });
	const studentRollNoExists = await student.exists({ rollNo: req.body.rollNo });
	const studentStudentNoExists = await student.exists({ studentNo: req.body.studentNo });
	const newStudent = new student(req.body);
	const validationError = newStudent.validateSync();
	if (!validationError){
		try {
			if ((studentEmailExists == null && studentRollNoExists == null && studentStudentNoExists == null)) {
				try {

					await newStudent.save();
					res.status(201).json({
						status: "success",
						body: {
							newStudent,
						}

					});
				} catch (error) {
					console.log("Error : ", error);

				}


			} else {
				res.status(201).json({
					status: studentEmailExists ? "studentEmailExists"
						: studentRollNoExists ? "studentRollNoExists"
							: studentStudentNoExists ? "studentStudentNoExists"
								: "Duplicacy"
					,



					body: req.body

				});
			}
		} catch (error) {
			console.log("Error : ", error);

	}
	
	}else{
		res.status(201).json({
			status: "validationError",
			body: {
				validationError,
			}

		});
	}
	






};

exports.delete = async(req,res,error)=>{

	student.deleteOne({ studentNo: req.params.studentNo }).then(function () {
		res.status(201).json({
			status: "deleted",
			body:{
				studentNo: req.params.studentNo
			}

		});
	}).catch(function (error) {
		res.status(201).json({
			status: "deletionFailed",
			body: {
				studentNo: req.params.studentNo
			}

		});
	});

}