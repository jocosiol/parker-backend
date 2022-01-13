# Parker Backend

![parker_logo](https://res.cloudinary.com/imgpetapp/image/upload/c_thumb,w_200,g_face/v1641979149/Parker_Logo_malwib.png)

ITC's Hackathon - Group 8
Report available public parking system.

## Entity-Relationship Diagram of SQL DataBase

![ERD_DB_parker](https://res.cloudinary.com/imgpetapp/image/upload/v1641996999/ERD_r88771.png)

## Endpoints

### ✅ [POST | "/pedestrian/newparking"]: Post a new available parking spot.

- **Expect:** Object {userId, newParkingLat, newParkingLon }
- **Return:** Object {createdParkingId, userId, userRanking}

### ✅ [GET | "/driver/parking/:id"]: Get all the available parking spot.

- **Expect:** Params userId
- **Return:** Array of Objects [{parkingId, parkingLat , parkingLon},...]

### ✅ [PUT | "/driver/parking"]: Update if the parking spot is taken.

- **Expect:** Object {parkingId}
- **Return:** Message

### ✅ [PUT | "/driver/location"]: Update driver location to search for available parking spots.

- **Expect:** Object {userId, userLat, userLon}
- **Return:** Message
