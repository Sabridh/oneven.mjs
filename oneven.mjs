import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question(" voer een getal in."))

if(getal1 % 2 == 0){
    console.log(getal1 + " is even");
    
}else {
    console.log(getal1 + " is oneven");
    
}






process.exit()



