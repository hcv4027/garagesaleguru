-- ADDRESS TABLE --
USE garage;

INSERT INTO addresses (addresstype, street, city, state, zipcode)
VALUES ("Seller","4027 Meadowview Hills Drive", "Charlotte", "NC", 28269);

INSERT INTO addresses (street, city, state, zipcode)
VALUES ("Buyer","3335 Majetsic Lane", "Charlotte", "NC", 28215);

INSERT INTO addresses (street, city, state, zipcode)
VALUES ("Seller","6760 Poppy Hills Lane", "Charlotte", "NC", 28226);

INSERT INTO addresses (street, city, state, zipcode)
VALUES ("Buyer","8516 Langley Mill Court", "Charlotte", "NC", 28215);

INSERT INTO addresses (street, city, state, zipcode)
VALUES ("Seller","4006 Leak Creek Court, SW", "Charlotte", "NC", 28269);

INSERT INTO addresses (street, city, state, zipcode)
VALUES ("Buyer","4021 Rockerfeller Way", "Charlotte", "NC", 28214);

--===================================================================== --
-- Garage Sales Table --
USE garage;

INSERT INTO garagesales (firstname, lastname, street, city, state, zipcode, invID)
VALUES ("Alex", "Neal", "4037 Green Patures Road", "Charlotte", "NC", 28269, 1);

INSERT INTO garagesales (firstname, lastname, street, city, state, zipcode, invID)
VALUES ("Barney", "Jacobs", "11222 Pacheco Lane", "Charlotte", "NC", 28215, 2);

INSERT INTO garagesales (firstname, lastname, street, city, state, zipcode, invID)
VALUES ("Dorothy", "Williams", "1000 Portabello Road", "Charlotte", "NC", 28215, 3);

INSERT INTO garagesales (firstname, lastname, street, city, state, zipcode, invID)
VALUES ("Mattie Mae", "Lincoln", "4006 Brisco Drive", "Concord", "NC", 28027, 4);

INSERT INTO garagesales (firstname, lastname, street, city, state, zipcode, invID)
VALUES ("James", "Banks", "1A Franklin Road, Apt 2B", "Charlotte", "NC", 28269, 5);

INSERT INTO garagesales (firstname, lastname, street, city, state, zipcode, invID)
VALUES ("Carla", "Pitts", "6315 Pitts School Road", "Concord", "NC", 28027, 6);

--===================================================================== --
-- Inventory Table --
