#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import showBanner from "node-banner"

class player {
    name: string;
    fuel: number = 100;
    constructor(
        name: string
    ) {
        this.name = name;
    }
    fueldecrease () {
        let fuel = this.fuel -25;
        this.fuel = fuel
    }
    fuelincrease () {
        this.fuel = 100;
    }
}
class opponent {
    name: string;
    fuel: number = 100;
    constructor(
        name: string,
    ) {
        this.name = name;
    }
    fueldecrease () {
        let fuel = this.fuel -25;
        this.fuel = fuel
    }
}

(async()=>{
    await showBanner("ADVENTURE GAME","BRAVE HERO IS COMING TO PROTECT PLANET EARTH FROM EVIL INVASION", "red", "green")
})();

async function advGame() {
    let Player = await inquirer.prompt([
        {
            name: "playername",
            type: "input",
            message: chalk.yellow("PLAYER'S NAME:")
        }
    ])
    
    let Opponent = await inquirer.prompt([
        {
            name: "enemyselection",
            type: "list",
            choices: ["assasin", "vampire", "wizard", "zombie"],
            message: chalk.red("Which enemy you want to enounter:")
        }
    ])
    
    let P1 = new player (Player.playername);
    let O1 = new opponent (Opponent.enemyselection);
    
do {
    if (Opponent.enemyselection == "assasin") {

        let ask = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                choices: ["attack", "drink potion", "run"],
                message: chalk.blue("What to do player??")
            }
        ])
        if (ask.option == "attack") {
            let num = Math.floor(Math.random()*2)
            if (num > 0) {
                P1.fueldecrease()
                console.log(chalk.bold.red.italic(`${P1.name} fuel is ${P1.fuel}`));
                console.log(chalk.bold.italic.green(`${O1.name} fuel is ${O1.fuel}`));
            if (P1.fuel <= 0)  {
                console.log(chalk.bold.italic.red(`${P1.name} you loss!! run for your life`));
                process.exit()   
            }
            }
            if (num <= 0) {
                O1.fueldecrease()
                console.log(chalk.bold.green.italic(`${P1.name} fuel is ${P1.fuel}`));
                console.log(chalk.bold.italic.red(`${O1.name} fuel is ${O1.fuel}`));
            if (O1.fuel <= 0)  {
                console.log(chalk.bold.italic.green(`YOU WIN`));
                process.exit()
            }
            }
        }

        if (ask.option == "drink potion") {
            P1.fuelincrease()
            console.log(chalk.bold.white.italic(`you drank a potion. Now your fuel is ${P1.fuel}`));
        }
        if (ask.option == "run") {
            console.log(chalk.bold.italic.yellow(`${P1.name} you losser!! run for your life`));
            process.exit()
        };
        }
    if (Opponent.enemyselection == "vampire") {

        let ask = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                choices: ["attack", "drink potion", "run"],
                message: chalk.blue("What to do player??")
            }
        ])
        if (ask.option == "attack") {
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                P1.fueldecrease()
                console.log(chalk.bold.red.italic(`${P1.name} fuel is ${P1.fuel}`));
                console.log(chalk.bold.italic.green(`${O1.name} fuel is ${O1.fuel}`));
            if (P1.fuel <= 0)  {
                console.log(chalk.bold.italic.red(`${P1.name} you loss!! run for your life`));
                process.exit()   
            }
            }
            if (num <= 0) {
                O1.fueldecrease()
                console.log(chalk.bold.green.italic(`${P1.name} fuel is ${P1.fuel}`));
                console.log(chalk.bold.italic.red(`${O1.name} fuel is ${O1.fuel}`));
            if (O1.fuel <= 0)  {
                console.log(chalk.bold.italic.green(`YOU WIN`));
                process.exit()
            }
            }
        }

        if (ask.option == "drink potion") {
            P1.fuelincrease()
            console.log(chalk.bold.white.italic(`you drank a potion. Now your fuel is ${P1.fuel}`));
        }
        if (ask.option == "run") {
            console.log(chalk.bold.italic.yellow(`${P1.name} you losser!! run for your life`));
            process.exit()
        };
        }
    if (Opponent.enemyselection == "wizard") {

        let ask = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                choices: ["attack", "drink potion", "run"],
                message: chalk.blue("What to do player??")
            }
        ])
        if (ask.option == "attack") {
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                P1.fueldecrease()
                console.log(chalk.bold.red.italic(`${P1.name} fuel is ${P1.fuel}`));
                console.log(chalk.bold.italic.green(`${O1.name} fuel is ${O1.fuel}`));
            if (P1.fuel <= 0)  {
                console.log(chalk.bold.italic.red(`${P1.name} you loss!! run for your life`));
                process.exit()   
            }
            }
            if (num <= 0) {
                O1.fueldecrease()
                console.log(chalk.bold.green.italic(`${P1.name} fuel is ${P1.fuel}`));
                console.log(chalk.bold.italic.red(`${O1.name} fuel is ${O1.fuel}`));
            if (O1.fuel <= 0)  {
                console.log(chalk.bold.italic.green(`YOU WIN`));
                process.exit()
            }
            }
        }

        if (ask.option == "drink potion") {
            P1.fuelincrease()
            console.log(chalk.bold.white.italic(`you drank a potion. Now your fuel is ${P1.fuel}`));
        }
        if (ask.option == "run") {
            console.log(chalk.bold.italic.yellow(`${P1.name} you losser!! run for your life`));
            process.exit()
        };
        }
    if (Opponent.enemyselection == "zombie") {

        let ask = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                choices: ["attack", "drink potion", "run"],
                message: chalk.blue("What to do player??")
            }
        ])
        if (ask.option == "attack") {
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                P1.fueldecrease()
                console.log(chalk.bold.red.italic(`${P1.name} fuel is ${P1.fuel}`));
                console.log(chalk.bold.italic.green(`${O1.name} fuel is ${O1.fuel}`));
            if (P1.fuel <= 0)  {
                console.log(chalk.bold.italic.red(`${P1.name} you loss!! run for your life`));
                process.exit()   
            }
            }
            if (num <= 0) {
                O1.fueldecrease()
                console.log(chalk.bold.green.italic(`${P1.name} fuel is ${P1.fuel}`));
                console.log(chalk.bold.italic.red(`${O1.name} fuel is ${O1.fuel}`));
            if (O1.fuel <= 0)  {
                console.log(chalk.bold.italic.green(`YOU WIN`));
                process.exit()
            }
            }
        }

        if (ask.option == "drink potion") {
            P1.fuelincrease()
            console.log(chalk.bold.white.italic(`you drank a potion. Now your fuel is ${P1.fuel}`));
        }
        if (ask.option == "run") {
            console.log(chalk.bold.italic.yellow(`${P1.name} you losser!! run for your life`));
            process.exit()
        };
        }
    } while (true)
} 
        
setTimeout(() => {
    advGame();
}, 1000);