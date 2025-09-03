const mongoose=require('mongoose');
require('dotenv').config();

// mongodb url----------


// const mongoUrl=process.env.MONGODB_URL_LOCAL;

const mongoUrl=process.env.DB_URL;



mongoose.connect(mongoUrl
    // useNewUrlparser:true,
    // useUnifiedTopology:true
);



const db=mongoose.connection;
db.on('connected',()=>{
    console.log("connecteed sucessfully");
})
db.on('error',()=>{
    console.log("error");
})
db.on('disconnected',()=>{
    console.log("server is disconnected");
})
module.exports=db;