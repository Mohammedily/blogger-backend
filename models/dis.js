const mongoose = require("mongoose");


const disShema = new mongoose.Schema({
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

const Dis = mongoose.model("dis", disShema);
module.exports = Dis;