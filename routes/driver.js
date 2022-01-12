const express = require("express");
const router = express.Router();
const { getAvailableParking, updateParkingById, updateUserLocationById } = require("../data/driver");

router.get("/parking/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const allParkingAvailable = await getAvailableParking();
    res.status(201).send([
      {
        minutes: 30,
        lat: 123.123123,
        lon: 123.123123
      }
    ]);
  } catch (err) {
    console.log(err);
  }
});

router.put("/parking", async (req, res) => {
  try {
    const { parkingId } = req.body;
    const updateParking = await updateParkingById(parkingId);
    res.status(201).json("Thanks for updating parking status to unavailable.");
  } catch (err) {
    console.log(err);
  }
});

router.put("/location", async (req, res) => {
  try{
    const { userId, userLat, userLon } = req.body;
    const updateUserLocation = await updateUserLocationById(userId, userLat, userLon);
    res.status(201).json("User location updated successfully.");
  } catch (err){
    console.log(err);
  }
});

module.exports = router;
