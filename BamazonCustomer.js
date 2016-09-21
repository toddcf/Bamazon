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

var next = false;
var ItemID;
var ProductName;
var Price;
var Inventory;

var runBamazon = function() {
	// CHECK IF THIS QUERY IS DONE CORRECTLY:
	var query = 'SELECT * FROM Bamazon';
	connection.query(query, function(err, res) {
        // Display all items available to the customer:
        showStock();
        }.then(function(answer) {
        	// Q1: Ask user the ID of the product they would like to buy:
        	idRequest();
    		// Do I have to name the following answer1 and answer2?
        	}).then(function(answer) {
        		// The second message should ask how many units of the product they would like to buy.
        		quantityRequest();
        	}).then(function(answer) {
        		// Check if you have enough to meet the customer's request.
        		checkStock();
			})
		})
}

// Display all items available to the customer:
var showStock = function() {
	console.log("Available Products: ");
    for (var i = 0; i < res.length; i++) {
        console.log(
        	"ItemID: " res[i].ItemID + 
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
		choices: [	"" /*DO I USE A FOR LOOP?*/
		]
	})
}

var quantityRequest = function() {
	inquirer.prompt({
		name: 		"quantityRequest",
		type: 		"input",
		message: 	"Excellent choice. How many would you like to purchase?"
	})
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
		// Fulfill order by updating this item's Inventory in the SQL 
		// database to reflect the remaining quantity.

		// Once the update goes through, show the customer the total cost 
		// of their purchase.		
	}
}