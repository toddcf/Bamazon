CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE Products(
	ItemID INT(4) NOT NULL AUTO_INCREMENT,
	ProductName VARCHAR(40) NOT NULL,
	DepartmentName VARCHAR(40) NOT NULL,
	Price DECIMAL(10, 2) NOT NULL,
	StockQuantity INT(10) NULL,
	PRIMARY KEY (ItemID)
);

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) 
	VALUES ('Laptop', 'Computers', 1499.99, 1);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) 
	VALUES ('JavaScript & jQuery by Jon Duckett', 'Books', 39.99, 8);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) 
	VALUES ('Camelbak Eddy', 'Water Bottles', 29.99, 15);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) 
	VALUES ('Kindle Oasis', 'eReaders', 289.99, 3);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) 
	VALUES ('Oakley Conductor 8', 'Sunglasses', 299.99, 1);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) 
	VALUES ('Sig P229', 'Guns', 1015.00, 3);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) 
	VALUES ('HTML & CSS by Jon Duckett', 'Books', 29.99, 9);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) 
	VALUES ('Ex Machina', 'Movies', 14.99, 5);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) 
	VALUES ('Sonicare', 'Toothbrushes', 99.95, 2);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) 
	VALUES ('Braun Series 7', 'Electric Shavers', 169.98, 2);