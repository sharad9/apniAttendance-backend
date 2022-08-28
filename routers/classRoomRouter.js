const express = require('express');
const router = express.Router();
const classRoomController = require('../controllers/classRoomController');
router.post('/register', classRoomController.register);
// router.delete('/delete/:classRoomNo', classRoomController.delete);

module.exports = router;