const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const port = 8002
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/HireHub').then(()=>console.log('Dn is connected')).catch((err)=>console.log(`Error : ${err}`));
app.use(express.json());

app.get('/',(req,res)=>{
    return res.send({"msg":"HireHub"});
})

app.listen(port,()=>console.log("Server is running on "+port))