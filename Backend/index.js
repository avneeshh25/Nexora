//importing express
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const UserRouter = require('./routers/UserRouter');

//initializig express
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors({
  origin: 'http://localhost:3000', // Your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
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

// Test endpoint
app.get('/test', (req, res) => {
  res.json({ message: 'Backend is connected!' });
});

//starting the server   
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});