const mongoose = require("mongoose");


const foodShema = new mongoose.Schema({
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

const food = mongoose.model("food", foodShema);
module.exports = food;