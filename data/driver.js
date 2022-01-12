const { query } = require("../lib/db");
const SQL = require("@nearform/sql");

async function updateParkingById(parkingId) {
    try {
        const sql = SQL`UPDATE parking SET available=false WHERE id=${parkingId}`;
        const editeAvailableParking = await query(sql);
        return 
    } catch (err) {
        console.log(err);
    }
}

module.exports = { updateParkingById };
