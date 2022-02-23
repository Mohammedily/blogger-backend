const express = require("express");
const routers = express.Router();
const Share = require("../models/share")

routers.post("/share", async(req,res) => {
   try{
  const { title, imageUrl, description } = req.body;

   const share = new Share({
    title, imageUrl, description
   })

   const newshare = await share.save();

   res.json(newshare);

   }catch(err){
    console.error(err);
    res.status(500).send();
   }
})
routers.get("/share/get", async(req,res) => {
   try{
    const share = await Share.find();
    res.json(share)
   }catch(err){
    console.error(err);
    res.status(500).send();
   }
})

module.exports = routers;