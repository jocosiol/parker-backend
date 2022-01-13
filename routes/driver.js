const express = require("express");
const router = express.Router();
const { getParkingNearUser, updateParkingById, updateUserLocationById, getTravelData } = require("../data/driver");

router.get("/parking/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const parkingNearUser = await getParkingNearUser(id);
    if (!parkingNearUser || !parkingNearUser.length) res.status(404).send('No parking near you.');
    res.status(200).send(parkingNearUser);
  } catch (err) {
    console.log(err);
    res.status(500).send();
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