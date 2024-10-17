import * as readline from 'readline/promises';
import { showCurrentDirectory, sayHello, sayGoodbye } from "./consoleMessages.js";
import { homedir } from "os";
import { commandCd } from "./commandCd.js";
import { commandLs } from "./commandLs.js";
import { commandCat } from "./commandCat.js";
import { commandRn} from "./commandRn.js";
import {  commandCp } from "./commandCp.js";
import { commandRm } from "./commandRm.js";
import { commandMv } from "./commandMv.js";
import { commandHash } from "./commandHash.js";
import { commandCompress } from './commandCompress.js';
import { commandDecompress } from './commandDecompress.js';
import { commandOs } from './commandOs.js';
import { commandAdd } from "./commandAdd.js";

const readLine  = readline.createInterface( {
    input: process.stdin,
    output: process.stdout,

});

sayHello();
process.chdir(homedir());
showCurrentDirectory();

readLine.on('line', async (input) => {
    try {
        switch (true) {
            case input === 'up': { await commandCd(".."); break; }
            case input.startsWith('cd') : { await commandCd(input.slice(3).trim()); break; }
            case input === 'ls': { await commandLs(); break; }
            case input.startsWith('cat') : {await commandCat(input.slice(4).trim()); break; }
            case input.startsWith('add') : {await commandAdd(input.slice(4).trim()); break; }
            case input.startsWith('rn') : { await commandRn(input.slice(3).trim()); break; }
            case input.startsWith('cp') : { await commandCp(input.slice(3).trim()); break; }
            case input.startsWith('mv') : { await commandMv(input.slice(3).trim()); break; }
            case input.startsWith('rm') : { await commandRm(input.slice(3).trim()); break; }
            case input.startsWith('hash') : { await commandHash(input.slice(5).trim()); break; }
            case input.startsWith('compress') : { await commandCompress(input.slice(9).trim()); break; }
            case input.startsWith('decompress') : { await commandDecompress(input.slice(11).trim()); break; }
            case input.startsWith('os') : { await commandOs(input.slice(3).trim()); break; }
            case input === '.exit' : { readLine.close();
                process.exit(0);
                break;}
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

