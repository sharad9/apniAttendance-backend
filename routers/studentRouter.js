const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
router.post('/register',studentController.register);
router.delete('/delete/:studentNo', studentController.delete);

module.exports = router;