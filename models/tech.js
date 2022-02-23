const mongoose = require("mongoose");


const techShema = new mongoose.Schema({
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

const Tech = mongoose.model("tech", techShema);
module.exports = Tech;