const mongoose=require('mongoose');

const personSchema=new mongoose.Schema({

name:{
    type:String,
    required:true
},
age:{
    type:Number,
    required:true
},
work:{
    type:String,
    enum:['chef','waiter','manager'],
    required:true
},
salary:{
    type:Number,
    required:true
},
mobile:{
    type:Number,
    required:true
},
email:{
    type:String,
    required:true,
    unique:true
},
address:{
    type:String,
    required:true
}

})
const person=mongoose.model('person',personSchema)
module.exports=person;

