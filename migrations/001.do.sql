CREATE TABLE `user` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `email` varchar(255),
  `hashedPassword` varchar(255),
  `rankPoint` int,
  `currentLat` float,
  `currentLon` float
);