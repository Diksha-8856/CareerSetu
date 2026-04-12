const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userProfileRoute = require('./Routers/userProfileRoute');
const userRouter = require('./Routers/login');
const enquiryRoute = require('./Routers/enquiry');
const jobRouter = require('./Routers/jobRouter');
const applyJobRouter = require('./Routers/applyJobRoute');
const employerRoute = require('./Routers/EmployerRegistration');
const port = 8002
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/HireHub').then(()=>console.log('Db is connected')).catch((err)=>console.log(`Error : ${err}`));
app.use(express.json());
app.use(cors())
 app.use('/api/enquiry',enquiryRoute)
 app.use('/api/login',userRouter)
 app.use('/api/userprofile',userProfileRoute)
 app.use('/api/employerpostJob',jobRouter)
 app.use('/api/applyJob',applyJobRouter)
 app.use('/api/registeremployer',employerRoute)

app.listen(port,()=>console.log("Server is running on "+port))