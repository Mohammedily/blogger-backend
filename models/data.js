const mongoose = require("mongoose");


const data = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

const Data = mongoose.model("data", data);
module.exports = Data;