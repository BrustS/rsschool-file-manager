import * as readline from 'readline/promises';
import { showCurrentDirectory } from "./messageToConsole.js";
import { homedir } from "os";

const readLine  = readline.createInterface( {
    input: process.stdin,
    output: process.stdout,
});
console.log("hi there");
process.chdir(homedir());

console.log(homedir());

readLine.on('line', async (input) => {
    try {
        switch (true) {
            case input === 'up': {
                console.log(`${input} up`);
                break;
            }

            case input.startsWith('cd') : {
                process.chdir(input.slice(3).trim());
                break;
            }
        }
       console.log(showCurrentDirectory);
    }
    catch (err) {
        console.log(err);
    }
});

readLine.on("close", () => {
    console.log("bye there");
    readLine.close();
});

