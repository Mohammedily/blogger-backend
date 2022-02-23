const express = require("express");
const routers = express.Router();
const Dis = require("../models/dis")

routers.post("/dis", async(req,res) => {
   try{
  const { title, imageUrl, description } = req.body;

   const dis = new Dis({
    title, imageUrl, description
   })

   const newdis = await dis.save();

   res.json(newdis);

   }catch(err){
    console.error(err);
    res.status(500).send();
   }
})
routers.get("/dis/get", async(req,res) => {
   try{
    const erdis = await Dis.find();
    res.json(erdis)
   }catch(err){
    console.error(err);
    res.status(500).send();
   }
})

module.exports = routers;