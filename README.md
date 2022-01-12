# Parker Backend

![parker_logo](https://res.cloudinary.com/imgpetapp/image/upload/c_thumb,w_200,g_face/v1641979149/Parker_Logo_malwib.png)

ITC's Hackathon - Report available public parking.


## Entity-Relationship Diagram of SQL DataBase


![ERD_DB_parker](https://res.cloudinary.com/imgpetapp/image/upload/v1641979934/WhatsApp_Image_2022-01-11_at_5.48.24_PM_iykcgu.jpg)

## Endpoints


### [POST | "/pedestrian/newparking"]: Post a new available parking spot.

- **Expect:** Object {userId, newParkingLat, newParkingLon }
- **Return:** Object {userId, userRanking}

### [GET | "/driver/parking"]: Get all the available parking spot.

- **Expect:** Object {userId, userLat , userLon}
- **Return:** Array of Objects [{parkingId, parkingLat , parkingLon},...]

### [PUT | "/driver/parking"]: Update if the parking spot is taken.

- **Expect:** Object {parkingId}
- **Return:** 

### [PUT | "/driver/location"]: Update driver location to search for available parking spots.

- **Expect:** Object {userId, userLat, userLon}
- **Return:** 
