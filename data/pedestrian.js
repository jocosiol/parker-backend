const { query } = require("../lib/db");
const SQL = require("@nearform/sql");

async function createNewParking(userId, newParkingLat, newParkingLon) {
  try {
    const sql = SQL`INSERT INTO parking (lat, lon, available, size, time, userId) VALUES (${newParkingLat}, ${newParkingLon}, true, null, CURRENT_TIMESTAMP, ${userId})`;
    const createdParking = await query(sql);
    const getUserRank = SQL`SELECT rankPoint FROM user WHERE id = ${userId}`;
    const userRank = await query(getUserRank);
    let newUserRank = userRank[0].rankPoint + 10;
    const sqlUpdateRank = SQL`UPDATE user SET rankPoint = ${newUserRank} WHERE id = 1`;
    const updateUserRank = await query(sqlUpdateRank);
    return { userId, newUserRank };
  } catch (err) {
    console.log(err);
  }
}

module.exports = { createNewParking };
