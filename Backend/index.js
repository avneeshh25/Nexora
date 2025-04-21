//importing express
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const UserRouter = require('./routers/UserRouter');

//initializig express
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors({origin:'*'})); //to allow all origins to access the server
app.use(express.json()); //to parse json data
app.use('/user', UserRouter);

//endpoint for the server   
app.get('/',(req,res)=>{ 
    res.send("response from express") 
})

app.get('/add',(req,res)=>{ 
    res.send('response from add');
})

//getall
app.get('/getall',(req,res)=>{ 
    res.send('response from get all');
})

//delete
app.get('/delete',(req,res)=>{ 
    res.send('response from delete');
})  

//delete
app.get('/delete',(req,res)=>{ 
    res.send('response from delete ');
})

//starting the server   
app.listen(port, () => {
    console.log("server is running")
});