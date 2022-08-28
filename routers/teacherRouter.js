const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');
router.post('/register', teacherController.register);
router.delete('/delete/:email', teacherController.delete);

module.exports = router;