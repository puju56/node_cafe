const express=require('express');
const app=express();
const db=require('./db');

const bodyParser=require('body-parser');
app.use(express.json())


app.get('/',function(req,resp){
    resp.send("welcome in our restro-----");
})


const personRoutes=require('./routes/personRotes');
app.use('/person',personRoutes);


const menuRoutes=require('./routes/menuRoutes');
app.use('/menu',menuRoutes);


app.listen(3000,()=>{
    console.log("listening on port 3000");
})