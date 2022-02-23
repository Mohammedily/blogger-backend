const express = require("express");
const routers = express.Router();
const Data = require("../models/data")

routers.post("/data", async(req,res) => {
   try{
  const { title, imageUrl, description } = req.body;

   const data = new Data({
    title, imageUrl, description
   })

   const newdata = await data.save();

   res.json(newdata);

   }catch(err){
    console.error(err);
    res.status(500).send();
   }
})
routers.get("/data/get", async(req,res) => {
   try{
    const data = await Data.find();
    res.json(data)
   }catch(err){
    console.error(err);
    res.status(500).send();
   }
})

module.exports = routers;