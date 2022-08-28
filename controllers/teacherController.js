

const teacher = require('../models/teacherModel');

exports.register = async (req, res, error) => {
	const teacherEmailExists = await teacher.exists({ email: req.body.email });

	const newteacher = new teacher(req.body);
	const validationError = newteacher.validateSync();
	if (!validationError) {
		try {
			if ((teacherEmailExists == null)) {
				try {

					await newteacher.save();
					res.status(201).json({
						status: "success",
						body: {
							newteacher,
						}

					});
				} catch (error) {
					console.log("Error : ", error);

				}


			} else {
				res.status(201).json({
					status: teacherEmailExists ? "teacherEmailExists"
						
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

exports.delete = async (req, res, error) => {

	teacher.deleteOne({ email: req.params.email }).then(function () {
		res.status(201).json({
			status: "deleted",
			body: {
				teacherNo: req.params.email
			}

		});
	}).catch(function (error) {
		res.status(201).json({
			status: "deletionFailed",
			body: {
				teacherNo: req.params.email
			}

		});
	});

}