const readline = require("readline");

console.log("Hello World!");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name? ", (name) => {
    console.log(`Hello, ${name}!`);
    rl.close();
});

rl.on("close", () => {
    console.log("Interface closed");
    process.exit(0);
});