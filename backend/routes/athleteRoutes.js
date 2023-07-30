const express = require("express");
const router = express.Router();
const athleteData = require("../data/athleteData");

// Route to get all athletes
router.get("/athletes", (req, res) => {
  try {
    // Assuming athleteData is an array of athlete objects
    res.json(athleteData);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
