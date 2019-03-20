-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS garage;
-- Create a database called programming_db --
CREATE DATABASE garage;

--===================================================
USE garage;

CREATE TABLE addresses(
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows. --
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  street VARCHAR(100),
  city VARCHAR(50),
  state VARCHAR(3),
  zipcode INTEGER(5),
  PRIMARY KEY (id)
);


--===================================================
USE garage;

INSERT INTO addresses (street, city, state, zipcode)
VALUES ("4027 Meadowview Hills Drive", "Charlotte", "NC", 28269);


--===================================================
USE garage;
Select * from addresses;