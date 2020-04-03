var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "great_bay_db"
});

// Start the connection to the great_bay_db
connection.connect(function (err) {
    if (err) throw err;
    console.log(`Connected as id ${connection.threadId} \n`);
    userPrompt();
});

// * Within your groups you are going to be creating a Node application
// called "Great-Bay" which allows users to create and bid on assorted
// items, tasks, jobs, or projects.

// * The basic application is fairly simple: Upon loading up the program,
// the user is prompted on whether they would like to "POST AN ITEM" or
// "BID ON AN ITEM" ---- OR give a 3rd option Peter suggested to quit

// Inquirer inside a function
// Call this function in connection.connect
// Prompt (or similar) --- maybe a checklist
// Then take in user answer & run new function accordingly
// Post an item = postItem()
// Bid on item = itemBid()
// Quit = userQuit() then connection.end

const userPrompt = () => inquirer.prompt([{
        name: "userInput",
        type: "list",
        message: "Which would you like to do?",
        choices: ["Post an item", "Bid on an item", "Quit"]
    }])
    .then(function (response) {
        console.log(`\n Selected choice: ${response.userInput} \n`);
        if (response.userInput === "Post an item") {
            postItem()
        } else if (response.userInput === "Bid on an item") {
            itemBid()
        } else if (response.userInput === "Quit") {
            userQuit()
        } else {
            console.log("Error in processing user response. \n")
        }
    });


// * If the user selects "POST AN ITEM" they are prompted for an assortment
// of information regarding the item and then that information is added to
// the database so that others can bid on it

function postItem() {
    console.log("Inserting a new product item now. \n");
    var query = connection.query(
        "INSERT INTO items SET ?", {
              itemName: "Test",
              startingBid: 10,
              highestBid: 50,
              category:"Dummycategory",
        },
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " item inserted! \n");
            // Call updateProduct AFTER the INSERT completes
            // updateitem();
        }
    )
    userPrompt();
};


// * If the user selects "BID ON AN ITEM" they are shown a list of all
// available items and then are prompted to select what they would like
// to bid on. The console then asks them how much they would like to bid,
// and their bid is compared to the previous highest bid. If their bid is
// higher, inform the user of their success and replace the previous bid
// with the new one. If their bid is lower (or equal), inform the user of
// their failure and boot them back to the selection screen.

itemBid = () => {
    console.log("itemBid() running. \n")
    userPrompt();
};

userQuit = () => {
    connection.end();
};

// * Once your group has put together the basic application, it's time to
// test your collective skills on some additional functionality, or "addons".
// Remember to take into consideration the amount of time you have been given
// when choosing what addons you would like to tackle.

// SEE ADD-ON OPTIONS IN README ONCE WE GET TO THIS POINT.