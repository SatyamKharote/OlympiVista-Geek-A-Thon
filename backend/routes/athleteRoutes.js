const express = require("express");
const router = express.Router();
const Athlete_data2  = require("../models/athleteModel");
const mongoose = require("mongoose");
// const athleteData = require("../data/athleteData");

// Route to get all athletes
router.get("/athletes", async(req, res) => {
  try {
     
    const athleteData  = await Athlete_data2.find().limit(50);
    // console.log(athleteData);
    res.send(athleteData);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

 


router.post("/athlete", async(req, res) => {
 
  const data = req.body;
  const userId = data.id;
 

  try {
    const result = await Athlete_data2.findById(userId);
    res.send(result);
    
  } catch (error) {
      res.send(error);
  }

})
module.exports = router;
