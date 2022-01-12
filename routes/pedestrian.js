const express = require("express");
const router = express.Router();
const { createNewParking } = require("../data/pedestrian");

router.post("/newparking", async (req, res) => {
  try {
    const { userId, newParkingLat, newParkingLon } = req.body;
    const newParking = await createNewParking(
      userId,
      newParkingLat,
      newParkingLon
    );
    res.status(201).json(newParking);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
