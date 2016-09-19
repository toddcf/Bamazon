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
	VALUES (Laptop, Computers, 1499.99, 1);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) 
	VALUES (JavaScript_&_jQuery_by_Jon_Duckett, Books, 39.99, 8);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) 
	VALUES (Camelbak_Eddy, Water_Bottles, 29.99, 15);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) 
	VALUES (Kindle_Oasis, eReaders, 289.99, 3);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) 
	VALUES (Oakley_Conductor_8, Sunglasses, 299.99, 1);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) 
	VALUES (Sig_P229, Guns, 1015.00, 3);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) 
	VALUES (HTML_&_CSS_by_Jon_Duckett, Books, 29.99, 9);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) 
	VALUES (Ex_Machina, Movies, 14.99, 5);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) 
	VALUES (Sonicare, Toothbrushes, 99.95, 2);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) 
	VALUES (Braun_Series_7, Electric_Shavers, 169.98, 2);