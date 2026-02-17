const readline = require("readline"); // used for reading input from the command line
const fs = require("fs"); // used for file system operations, such as reading and writing files
const http = require("http"); // used for creating an HTTP server and making HTTP requests


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

const server = http.createServer((req, res) => {
    // res.end("Hello, World!"); // sends a response to the client with the message "Hello, World!"
    // console.log(`Received request for ${req.url}`); // logs the URL of the incoming request to the console
    let path = req.url;
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

        res.writeHead(200, { "Content-Type": "application/json" }); // sets the HTTP status code to 200 (OK) and the content type to JSON
        res.end(JSON.stringify(products)); // sends a response to the client with the content of the product.json file


    } else {
        res.writeHead(404, { "Content-Type": "text/plain" }); // sets the HTTP status code to 404 (Not Found) and the content type to plain text
        res.end("Page not found!"); // sends a response to the client with the message "Page not found!" if the URL does not match any of the specified paths   
    }

}); // creates an HTTP server that listens for incoming requests and sends responses

server.listen(3000, '127.0.0.1', () => {
    console.log("Server is started!"); // starts the server and logs a message to the console indicating that the server is running
});