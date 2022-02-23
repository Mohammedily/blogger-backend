const express = require("express");
const routers = express.Router();
const Tech = require("../models/tech")

routers.post("/tech", async(req,res) => {
   try{
  const { title, imageUrl, description } = req.body;

   const tech = new Tech({
    title, imageUrl, description
   })

   const newtech = await tech.save();

   res.json(newtech);

   }catch(err){
    console.error(err);
    res.status(500).send();
   }
})
routers.get("/tech/get", async(req,res) => {
   try{
    const tech = await Tech.find();
    res.json(tech)
   }catch(err){
    console.error(err);
    res.status(500).send();
   }
})

module.exports = routers;