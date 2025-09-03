const express=require('express');
const app=express();
const db=require('./db');
require('dotenv').config();

const bodyParser=require('body-parser');
app.use(express.json())

const PORT=process.env.PORT || 3000;


app.get('/',function(req,resp){
    resp.send("welcome in our restro-----");
})


const personRoutes=require('./routes/personRotes');
app.use('/person',personRoutes);


const menuRoutes=require('./routes/menuRoutes');
app.use('/menu',menuRoutes);



app.listen(PORT,()=>{
    console.log("listening on port 3000");
})