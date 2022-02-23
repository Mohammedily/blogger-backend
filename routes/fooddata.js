const express = require("express");
const routers = express.Router();
const Food = require("../models/food")

routers.post("/food", async(req,res) => {
   try{
  const { title, imageUrl, description } = req.body;

   const food = new Food({
    title, imageUrl, description
   })

   const newfood = await food.save();

   res.json(newfood);

   }catch(err){
    console.error(err);
    res.status(500).send();
   }
})
routers.get("/food/get", async(req,res) => {
   try{
    const erfood = await Food.find();
    res.json(erfood)
   }catch(err){
    console.error(err);
    res.status(500).send();
   }
})

module.exports = routers;