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
        	}).then(function(answer) {
        		// The second message should ask how many units of the product they would like to buy.
        		inquirer.prompt({
        			name: 		"action",
        			type: 		"input",
        			message: 	"Excellent choice. How many would you like to purchase?"
        		})
        	}).then(function(answer) {
        		// Check if your store has enough of the product to meet the customer's request.
        		// NOT SURE THIS IS CORRECT:
        		var query = 'SELECT StockQuantity FROM Products HAVING count(*) > 1';
        		// If not, the app should log a phrase like Insufficient quantity!, 
				// and then prevent the order from going through.

				// However, if your store does have enough of the product, you should 
				// fulfill the customer's order.  This means updating the SQL 
				// database to reflect the remaining quantity.

				// Once the update goes through, show the customer the total cost 
				// of their purchase.
			})
        })
}