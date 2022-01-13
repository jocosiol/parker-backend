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
  
async function updateUserLocationById(userId, userLat, userLon) {
    try {
        const sql = SQL`UPDATE user SET currentLat=${userLat}, currentLon=${userLon} WHERE id=${userId}`;
        const editUser = await query(sql);
        return 
    } catch (err) {
        console.log(err);
    }
}

async function getUsersLatestLocation(userId) {
    try {
        const sql = SQL`SELECT currentLat, currentLon FROM user WHERE id = ${userId};`;
        const coordinates = await query(sql);
        return coordinates;
    } catch(err) {
        console.log(err);
        return null
    }
}

async function getParkingNearUser(userId) {
    try {
        const usersLocation = await getUsersLatestLocation(userId);
        if (!usersLocation) throw new Error("Something went wrong.");
        const sql = SQL`SELECT lat, lon FROM parking WHERE available = 1 AND lat >= ${usersLocation[0].currentLat - 0.008} AND lat <= ${usersLocation[0].currentLat + 0.008} AND lon >= ${usersLocation[0].currentLon - 0.008} AND lon <= ${usersLocation[0].currentLon + 0.008};`;
        const secondSql = SQL`SELECT lat, lon FROM parking WHERE available = 1;`;
        let results = await query(sql);
        if (results && !results.length) {
            results = await query(secondSql);
        }
        return results;
    } catch(err) {
        console.log(err);
        return null;
    }
}

module.exports = { updateParkingById, updateUserLocationById, getParkingNearUser, getUsersLatestLocation };
