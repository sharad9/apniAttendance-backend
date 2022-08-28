const express = require('express');
const studentRouter = require('./routers/studentRouter'); 
const teacherRouter = require('./routers/teacherRouter');
const classRoomRouter = require('./routers/classRoomRouter');
const app = express();

app.use(express.json());
app.use('/student',studentRouter);
app.use('/teacher', teacherRouter);
app.use('/classRoom', classRoomRouter);
module.exports = app;