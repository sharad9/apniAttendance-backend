const attendanceMarked = require('../models/attendanceMarked');

exports.register = async (req, res, error) => {
	
	const newattendanceMarked = new attendanceMarked(req.body);
	const validationError = newattendanceMarked.validateSync();
	if (!validationError) {
		try {
			if ((attendanceMarkedEmailExists == null && attendanceMarkedRollNoExists == null && attendanceMarkedattendanceMarkedNoExists == null)) {
				try {

					await newattendanceMarked.save();
					res.status(201).json({
						status: "success",
						body: {
							newattendanceMarked,
						}

					});
				} catch (error) {
					console.log("Error : ", error);

				}


			} else {
				res.status(201).json({
					status: attendanceMarkedEmailExists ? "attendanceMarkedEmailExists"
						: attendanceMarkedRollNoExists ? "attendanceMarkedRollNoExists"
							: attendanceMarkedattendanceMarkedNoExists ? "attendanceMarkedattendanceMarkedNoExists"
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

	attendanceMarked.deleteOne({ attendanceMarkedNo: req.params.attendanceMarkedNo }).then(function () {
		res.status(201).json({
			status: "deleted",
			body: {
				attendanceMarkedNo: req.params.attendanceMarkedNo
			}

		});
	}).catch(function (error) {
		res.status(201).json({
			status: "deletionFailed",
			body: {
				attendanceMarkedNo: req.params.attendanceMarkedNo
			}

		});
	});

}