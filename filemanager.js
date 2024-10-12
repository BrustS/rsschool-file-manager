import * as readline from 'readline/promises';
import { showCurrentDirectory, sayHello, sayGoodbye } from "./consoleMessages.js";
import { homedir } from "os";
import { commandCd } from "./commandCd.js";
import { commandLs } from "./commandLs.js";

const readLine  = readline.createInterface( {
    input: process.stdin,
    output: process.stdout,
});

sayHello();
process.chdir(homedir());

console.log(homedir());

readLine.on('line', async (input) => {
    try {
        switch (true) {
            case input === 'up': {
               await commandCd("..");
                break;
            }

            case input.startsWith('cd') : {
               await commandCd(input.slice(3).trim());
                break;
            }

            case input === 'ls': {
                await commandLs();
                break;
            }
            default: {
              console.log("Invalid input");
                break;
            }
        }
      showCurrentDirectory();
    }
    catch (err) {
        console.log(err);
    }
});

readLine.on("close", () => {
    sayGoodbye();
    readLine.close();
});

