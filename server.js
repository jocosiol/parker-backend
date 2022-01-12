const express = require('express')
const cors = require("cors");
const pedestrianRoute = require("./routes/pedestrian");
const driverRoute = require("./routes/driver");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.use('/pedestrian', pedestrianRoute);
app.use('/driver', driverRoute);


app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});