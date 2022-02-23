const mongoose = require("mongoose");


const shareShema = new mongoose.Schema({
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

const Share = mongoose.model("share", shareShema);
module.exports = Share;