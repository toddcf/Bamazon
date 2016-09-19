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
    runSearch();
})

var next = false;
var ItemID;
var ProductName;
var Price;
var StockQuantity;

var runBamazon = function() {
	// Running this application will first display all of the items 
	// available for sale. Include the ids, names, and prices of 
	// products for sale.
	
	// CHECK IF THIS QUERY IS DONE CORRECTLY::
	var query = 'SELECT * FROM Bamazon';
	connection.query(query, function(err, res) {
        console.log("Available Products: ");
        for (var i = 0; i < res.length; i++) {
            console.log(
            	"ItemID: " res[i].ItemID + 
            	" || Product: " + res[i].ProductName + 
            	" || Price: " + res[i].Price + 
            	" || Qty: " + res[i].StockQuantity);
        }.then(function(answer) {
        	// The app should then prompt users with two messages.
        	// The first should ask them the ID of the product they would like to buy.
        	inquirer.prompt({
        		name: 		"action",
        		type: 		"input",
        		message: 	"Please enter the ID number of the product would you like to purchase:",
        		choices: [	"" /*DO I USE A FOR LOOP?*/
        		]
    		// Do I have to call the following answer1 and answer2?
        	}).then(function(answer) {
        		// The second message should ask how many units of the product they would like to buy.
        		inquirer.prompt({
        			name: 		"action",
        			type: 		"input",
        			message: 	"Excellent choice. How many would you like to purchase?"
        		})
        	}).then(function(answer) {
        		// Check if your store has enough of the product to meet the 
        		// customer's request.
        		// NOT SURE THIS IS CORRECT:
        		var query = 'SELECT ItemID FROM Products';
        		connection.query(query, [answer.ItemID, answer.StockQuantity], function(err, res) {
        			if (answer.StockQuantity < 1) {
        				console.log("Apologies -- you have selected an item that is out of stock. Could we interest you in something else instead?");
        				// PREVENT THE ORDER FROM GOING THROUGH.
        				// RESET.
        			} else {
        				// Fulfill order by updating this item's StockQuantity in the SQL 
        				// database to reflect the remaining quantity.

        				// Once the update goes through, show the customer the total cost 
						// of their purchase.		
        			}

				
				
				})
			})
        })
}