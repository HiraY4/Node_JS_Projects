#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";

class person {
    name: string;
    personality: string = "Hey!! mysterious!! "
     constructor(
         name: string,
     ) {
         this.name = name;
         }
 }
 
(async () => {
    await showBanner ("PERSONALITY TRAITS", "LETS FIGURE OUT YOU!!", "blue", "red")
})();

 let loop = true;
 async function startLoop(){
    while (loop){
        await OOP()
    } 
};

async function OOP () {
do {
    let Person = await inquirer.prompt([
        {
            name: "individual",
            type: "input",
            message: chalk.green("Please share your name?"),
        }
    ])
    const { individual } = Person;
    
    let P1 = new person(Person.individual)
    console.log(chalk.blue(`${P1.personality} please share!!`));
    
   
    if (individual) {
    const information = await inquirer.prompt([
        {
            name: "info",
            type: "list",
            choices: ["You like to keep to yourself", "You like to explore and lead"],
            message: chalk.yellow("please enter your personality:")
        }
    ]) 
    let { info } = information
    
    if (info) {
    if (info == "You like to keep to yourself") {
            console.log(chalk.green.bold.italic(`INTROVERT😅🎮🎧🏡`));
            
        }
    else if (info == "You like to explore and lead") {
        console.log(chalk.red.bold.italic(`EXTROVERT😎🎢🎳🏖`));
                }
            }
        }
        let re = await inquirer.prompt([
            {
                name: "start",
                type: "list",
                choices: ["Yes","No"],
                message: chalk.grey("Would you like to do check again? Yes or No:")
            }
        ]);
        const {start} = re;
        if (start) 
        re.start == "Yes"
        ? loop
        : process.exit(); 
    } while (loop != false) 
}

setTimeout(() => {
    startLoop();
}, 1000);
