const readline = require("readline"); // used for reading input from the command line
const fs = require("fs"); // used for file system operations, such as reading and writing files


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
fs/* .readFile('./files/start.txt', 'utf-8', (err, data) => { // reads the content of the file asynchronously and returns it as a string
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