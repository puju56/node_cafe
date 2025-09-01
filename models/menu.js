const mongoose = require('mongoose');

// menu schema 

const menuSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:['sweet','spicy','sour','cold'],
        required:true
    },
    is_drink:{
        type:Boolean,
        default:false
    }
    // ingredients:{
    //     type:[String],
    //     default:[]
    // },
    // num_sales:{
    //     type:Number,
    //     default:0
    // }
});


// menu model

const menu=mongoose.model('menu',menuSchema)
module.exports=menu;


