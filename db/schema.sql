DROP DATABASE IF EXISTS grilling_db;
CREATE DATABASE grilling_db;
USE grilling_db;

CREATE TABLE food
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	grilled BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
