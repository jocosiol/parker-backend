const express = require("express");
const router = express.Router();
const { getAvailableParking, updateParkingById } = require("../data/driver");

router.get("/parking/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const allParkingAvailable = await getAvailableParking();
    res.status(201).json(newParking);
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
router.put("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = router;
