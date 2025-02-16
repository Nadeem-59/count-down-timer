//project # 9 in this project,you will build a countdown timer using the date module .
//#! /usr/bin/env/node

import chalk from "chalk";
import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
console.log(chalk.bold.italic.greenBright("$$$$$  $$$$  $$  $$ $$\\  $$ $$$$$$  $$$$   $$$$  $$  //\\  $$ $$\\  $$  $$$$$$ $$$$$$ $$\\    //$$ $$$$$ $$$$$"));
console.log(chalk.bold.italic.yellowBright ("$     $$  $$ $$  $$ $$ \\ $$   $$    $   $ $$  $$ $$ //  \\ $$ $$ \\ $$    $$     ||   $$ \\  // $$ $==== $$___|"));
console.log(chalk.bold.italic.redBright    ("$$$$$  $$$$  $$$$$$ $$  \\$$   $$    $$$$   $$$$  $$//    \\$$ $$  \\$$    $$   $$$$$$ $$  \\//  $$ $$$$$ $$ \\  "));


const res = await inquirer.prompt(
    {
        type:"number",
        name:"userinput",
        message:chalk.bold.italic.yellowBright ("Please enter the amount of seconds"),
        validate: (input)=>{
            if (isNaN(input)){
                return chalk.bold.italic.redBright ("Please Enter Valid number")
            }else if (input > 60){
                return chalk.bold.italic.blueBright("Seconds must be in 60")
            }else{
                return true
            }
        }
    }
)
let input = res.userinput
function starttime(val:number){
    const intTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(intTime);
    setInterval((()=>{
        const currentTime = new Date()
        const timeDif = differenceInSeconds(intervalTime,currentTime)
        if (timeDif <= 0){
            console.log(chalk.bold.italic.red ("Timer has expired"));
            process.exit()
        }
        const min = Math.floor((timeDif%3600*24)/3600)
        const sec = Math.floor((timeDif%60))
        console.log(`${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`);
        
    }),1000)
}

starttime(input);                                                                      
    
    

