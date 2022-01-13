const express = require('express')
const cors = require("cors");
const { postgrator } = require("./lib/db");
const pedestrianRoute = require("./routes/pedestrian");
const driverRoute = require("./routes/driver");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use('/pedestrian', pedestrianRoute);
app.use('/driver', driverRoute);


postgrator
  .migrate()
  .then((result) => {
    console.log(`Migrated DB successfully:`, result);
    app.listen(PORT, () => {
      console.log(`Listening at http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.error(error));

  module.exports = app