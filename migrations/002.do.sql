CREATE TABLE `parking` (
    `id` int PRIMARY KEY AUTO_INCREMENT,
    `lat` float,
    `lon` float,
    `available` boolean,
    `size` varchar(255),
    `time` timestamp,
    `userId` int,
    FOREIGN KEY (userId) REFERENCES user(id)
);