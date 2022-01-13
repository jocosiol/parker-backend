const express = require("express");
const router = express.Router();
const axios = require('axios');
const { getParkingNearUser, updateParkingById, updateUserLocationById, getUsersLatestLocation, getTravelData } = require("../data/driver");
require('dotenv').config();

const calculateDistance = async (results, id) => {
    const userLocation = await getUsersLatestLocation(id);
    if (!userLocation) {
      res.status(500).send();
      return;
    }
    const url = (destination) => `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${userLocation[0].currentLat},${userLocation[0].currentLon}&destinations=${destination.lat},${destination.lon}&units=metric&key=${process.env.GOOGLE_API}`;
    const distances = () => new Promise((resolve, reject) => {
      let counter = 0;
      const apiResults = []
      results.forEach(result => {
        axios.get(url(result))
          .then(res => {
            const response = res.data.rows[0].elements;
            if (response[0].status === 'ZERO_RESULTS') {
              apiResults.push([{
                duration: {
                  text: "Too far to calculate"
                },
                distance: {
                  text: "Very far away"
                }
              }])
            } else {
              apiResults.push(response)
            }
            counter++
            if (counter === results.length) resolve(apiResults)
          })  
      })
    })
    return await distances();
}



router.get("/parking/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const parkingNearUser = await getParkingNearUser(id);
    if (!parkingNearUser || !parkingNearUser.length) res.status(404).send('No parking near you.');
    const distances = await calculateDistance(parkingNearUser, id);
    const response = parkingNearUser.map((location, index) => {
        const url = `https://www.waze.com/live-map/directions?navigate=yes&to=ll.${location.lat}%2C${location.lon}`;
        return {
          url,
          duration: distances[index][0].duration.text,
          distance: distances[index][0].distance.text,
          lat: location.lat,
          lon: location.lon
        }
    })
    res.status(200).send(response);
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
    const { userId, currentLat, currentLon } = req.body;
    const updateUserLocation = await updateUserLocationById(userId, currentLat, currentLon);
    res.status(201).json("User location updated successfully.");
  } catch (err){
    console.log(err);
  }
});

module.exports = router;