DROP DATABASE IF EXISTS great_bay_db;

CREATE DATABASE great_bay_db;

USE great_bay_db;


CREATE TABLE items(
  id INTEGER NOT NULL AUTO_INCREMENT,
  itemName VARCHAR(45) NULL,
  startingBid INTEGER NULL,
  highestBid INTEGER NULL,
  category VARCHAR(45) NULL,
  PRIMARY KEY (id)
); 

-- Dummy data, need to populate with user data

INSERT INTO items (itemName, startingBid, category)
VALUES ("cheese", 2.50, "item");

INSERT INTO items (itemName, startingBid, category)
VALUES ("yardwork", 10, "job");

INSERT INTO items (itemName, startingBid, category)
VALUES ("repair", 100, "project");

-- ### FILLER / TEST ITEMS HERE
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);