var mysql 		= require('mysql');
var inquirer 	= require('inquirer');
var prompt 		= require('prompt');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "Iwsi2017!", //Your password
    database: "Bamazon"
})

connection.connect(function(err) {
    if (err) throw err;
    runBamazon();
})

// GLOBAL VARIABLES
var next = false;
var ItemID;
var ProductName;
var Price;
var Inventory;
var userQuantityRequest;

// MAIN PROCESS.  Runs when SQL connection is made.
var runBamazon = function() {
	// CHECK IF THIS QUERY IS DONE CORRECTLY:
	var query = 'SELECT * FROM Bamazon';
	connection.query(query, function(err, res) {
        // Display all items available to the customer:
        showStock();
	    }.then(function(answer) {
	    	// Q1: Ask user the ID of the product they would like to buy:
	    	idRequest();
		}).then(function(answer) {
			// Q2: Ask user the quantity of that ItemID they would like to buy:
			quantityRequest();
		}).then(function(answer) {
			// Check if you have enough to meet the customer's request.
			checkStock();
		}).then(function() { /* Do I need to put "answer" in the ()? */
			// Once the update goes through, show the customer the total cost 
			// of their purchase.
			confirmOrder();
		})
	)
}

// Display all items available to the customer:
var showStock = function() {
	console.log("Available Products: ");
    for (var i = 0; i < res.length; i++) {
        console.log(
        	"ItemID: " + res[i].ItemID + 
        	" || Product: " + res[i].ProductName + 
        	" || Price: " + res[i].Price + 
        	" || Qty: " + res[i].Inventory
    	);
    }
}

// Q1: Ask user the ID of the product they would like to buy:
var idRequest = function() {
	inquirer.prompt({
		// WHAT ARE THE RULES FOR THE NAME?
		name: 		"itemID",
		type: 		"input",
		message: 	"Please enter the ID number of the product would you like to purchase:",
	})
}

// Q2: Ask user the quantity of that ItemID they would like to buy:
var quantityRequest = function() {
	inquirer.prompt({
		name: 		"quantityRequest",
		type: 		"input",
		message: 	"Excellent choice. How many would you like to purchase?"
	})
	// HOW DO I STORE THE USER'S ANSWER AS A VARIABLE?
	userQuantityRequest = answer.quantityRequest;
}

// Check if you have enough to meet the customer's request.
var checkStock = function() {
	// NOT SURE THIS IS CORRECT:
	if (answer.Inventory < 1) {
		console.log("Apologies -- you have selected an item that is out of stock. Could we interest you in something else instead?");
		// PREVENT THE ORDER FROM GOING THROUGH.  (aka DO NOTHING.)
		// RESET.
		runBamazon();
	} else {
		// Fulfill order by updating Inventory in SQL.
		updateStock();
	}
}

// Fulfill order by updating Inventory in SQL.
var updateStock = function() {
	Inventory -= userQuantityRequest;
	connection.query(
		'UPDATE Products SET ? WHERE ?',
		[
			{Inventory: Inventory},
			{ItemID: id} /* Is "id" correct? */
		]
	)
}

// Show customer their final total:
var confirmOrder = function() {
	console.log("Purchase successful! Total price: " + (userQuantityRequest * Price));
}