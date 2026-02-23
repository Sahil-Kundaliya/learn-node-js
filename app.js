const readline = require("readline"); // used for reading input from the command line
const fs = require("fs"); // used for file system operations, such as reading and writing files
const http = require("http"); // used for creating an HTTP server and making HTTP requests
const url = require("url"); // used for parsing URLs and working with URL components
// const event = require("events"); // used for working with events and creating event emitters

const user = require("./modules/user"); // imports the User class from the user.js module


// A
// console.log("Hello World!");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("What is your name? ", (name) => {
//     console.log(`Hello, ${name}!`);
//     rl.close();
// });

// rl.on("close", () => {
//     console.log("Interface closed");
//     process.exit(0);
// });

// B
/* const fileContent = fs.readFileSync('./files/input.txt', 'utf-8'); // reads the content of the file synchronously and returns it as a string
console.log(fileContent); // prints the content of the file to the console
const modifiedContent = `Modified: ${fileContent} at time \n ${new Date().toLocaleString()}`; // modifies the content of the file by adding a prefix

fs.writeFileSync('./files/output.txt', modifiedContent); // writes the content of the file to a new file called output.txt synchronously
console.log("File has been written successfully!"); // prints a success message to the console */

// C
/* fs.readFile('./files/start.txt', 'utf-8', (err, data) => { // reads the content of the file asynchronously and returns it as a string
    if (err) {
        console.error("Error reading file:", err); // logs an error message if there is an error reading the file
        return;
    }
    console.log(data);

    fs.readFile(`./files/${data}.txt`, 'utf-8', (err1, data1) => { // reads the content of the file asynchronously and returns it as a string
        if (err1) {
            console.error("Error reading file:", err1); // logs an error message if there is an error reading the file
            return;
        }
        console.log(data1);

        fs.writeFile('./files/final.txt', `${data}\n\n${data1}`, (err2) => { // writes the content of the file to a new file called final.txt asynchronously
            if (err2) {
                console.error("Error writing file:", err2); // logs an error message if there is an error writing the file
                return;
            }
            console.log("File has been written successfully!"); // prints a success message to the console
        });
    });
}); // prints the content of the file to the console

console.log("This will be printed before the file content is read."); */ // demonstrates that the file reading is asynchronous by printing this message before the file content is read


// D
let products = JSON.parse(fs.readFileSync('./data/product.json', 'utf-8')); // reads the content of the product.json file synchronously and returns it as a string

// const server = http.createServer((req, res) => {

// }); // creates an HTTP server that listens for incoming requests and sends responses


const server = http.createServer();

server.on("request", (req, res) => {
    // res.end("Hello, World!"); // sends a response to the client with the message "Hello, World!"
    // console.log(`Received request for ${req.url}`); // logs the URL of the incoming request to the console

    let { query, pathname: path } = url.parse(req.url, true); // parses the URL of the incoming request and returns an object containing the query parameters

    // let path = pathname;
    if (path === "/" || path.toLocaleLowerCase() === "/home") {
        res.writeHead(200, { "Content-Type": "text/plain" }); // sets the HTTP status code to 200 (OK) and the content type to plain text
        res.end("You are on the home page!"); // sends a response to the client with the message "You are on the home page!"

    } else if (path.toLocaleLowerCase() === "/about") {
        res.writeHead(200, { "Content-Type": "text/plain" }); // sets the HTTP status code to 200 (OK) and the content type to plain text
        res.end("You are on the about page!"); // sends a response to the client with the message "You are on the about page!"

    } else if (path.toLocaleLowerCase() === "/contact") {
        res.writeHead(200, { "Content-Type": "text/plain" }); // sets the HTTP status code to 200 (OK) and the content type to plain text
        res.end("You are on the contact page!"); // sends a response to the client with the message "You are on the contact page!"

    } else if (path.toLocaleLowerCase() === "/products") {
        if (!query.id) { // checks if the query parameter "id" is present in the URL
            res.writeHead(200, { "Content-Type": "application/json" }); // sets the HTTP status code to 200 (OK) and the content type to JSON
            res.end(JSON.stringify(products)); // sends a response to the client with the content of the product.json file
        } else {
            res.end(JSON.stringify(products.find(p => p.id === Number(query.id)))); // sends a response to the client with the product that matches the id query parameter
        }

    } else {
        res.writeHead(404, { "Content-Type": "text/plain" }); // sets the HTTP status code to 404 (Not Found) and the content type to plain text
        res.end("Page not found!"); // sends a response to the client with the message "Page not found!" if the URL does not match any of the specified paths   
    }

}); // creates an HTTP server that listens for incoming requests and sends responses

server.listen(3000, '127.0.0.1', () => {
    console.log("Server is started!"); // starts the server and logs a message to the console indicating that the server is running
});


// E

/* let myEmitter = new user(); // creates a new event emitter object

myEmitter.on("newUserCreated", (user) => { // listens for the "newUserCreated" event and executes the callback function when the event is emitted
    console.log(`A new user has been created: ${user.name}`); // logs a message to the console with the name of the new user
});

myEmitter.emit("newUserCreated", { name: "John Doe" }); // emits the "newUserCreated" event with a user object as an argument, which triggers the callback function and logs the message to the console */



// F
/*
server.on("request", (req, res) => {
    let rs = fs.createReadStream('./files/input.txt', 'utf-8'); // creates a readable stream from the largefile.txt file

    rs.on("data", (chunk) => { // listens for the "data" event on the readable stream and executes the callback function when a chunk of data is available
        res.write(chunk); // writes the chunk of data to the response object, which sends it to the client
    });

    rs.on("error", (err) => { // listens for the "error" event on the readable stream and executes the callback function when an error occurs
        console.error("Error reading file:", err);
        res.writeHead(500, { "Content-Type": "text/plain" }); // sets the HTTP status code to 500 (Internal Server Error) and the content type to plain text
        res.end("Error reading file!"); // sends a response to the client with the message "Error reading file!" if there is an error reading the file
    });

    rs.on("end", () => { // listens for the "end" event on the readable stream and executes the callback function when the end of the file is reached
        res.end(); // ends the response to the client, indicating that all data has been sent
    });
}); // listens for incoming requests to the server and executes the callback function when a request is received */


// G

/* server.on("request", (req, res) => {
    let rs = fs.createReadStream('./files/input.txt', 'utf-8'); // creates a readable stream from the input.txt file

    rs.pipe(res); // pipes the readable stream to the response object, which sends the data to the client

}); // listens for incoming requests to the server and executes the callback function when a request is received */

// Main tread
con/* sole.log("Progress has started"); // logs a message to the console indicating that the end of the file has been reached

// 1 Phase
setTimeout(() => {
    console.log("Progress is in progress..."); // logs a message to the console indicating that the end of the file has been reached
}, 0);

// 2 Phase 
fs.readFile('./files/input.txt', 'utf-8', (err, data) => { // reads the content of the file asynchronously and returns it as a string
    console.log("Read file is completed"); // prints the content of the file to the console

    // 1 Phase
    setTimeout(() => {
        console.log("Second Progress is in progress..."); // logs a message to the console indicating that the end of the file has been reached
    }, 0);

    // 3 Phase
    setImmediate(() => {
        console.log("Second Progress is immediate..."); // logs a message to the console indicating that the end of the file has been reached
    });

    process.nextTick(() => {
        console.log("Second Progress is next tick..."); // logs a message to the console indicating that the end of the file has been reached
    });
});

// 3 Phase
setImmediate(() => {
    console.log("Progress is immediate..."); // logs a message to the console indicating that the end of the file has been reached
});

// Main tread
console.log("Progress has completed"); // logs a message to the console indicating that the end of the file has been reached    
 */
// below is output of the above code
//
// Progress has started
// Progress has completed
// Server is started!
// Progress is in progress...
// Progress is immediate...
// Read file is completed
// Second Progress is next tick...
// Second Progress is immediate...
// Second Progress is in progress...