#!/usr/bin/env node

import inquirer from "inquirer";
import users from "./users.js";
import mainScreen from "./mainScreen.js";
import chalk from "chalk";
import { setTimeout } from "timers/promises";
import showBanner from "node-banner";

console.clear();

async function login (){
    const answers = await inquirer.prompt([
        {
            name: "accountNumber",
            type: "number",
            message: chalk.blue("Please enter you account number:")
        },
        {
            name: "PIN",
            type: "password",
            message: chalk.blue("Please enter you PIN:")
        }
    ])
    let user = users.find(x=>x.accountNumber==answers.accountNumber && x.pinCode==answers.PIN);
    if (typeof user != "undefined"){
        console.log(chalk.bold.italic(`${user.name} Logged In`));
        mainScreen(user.balance);
    } else {
        console.log(chalk.red(`Please enter valid account number or PIN!`));
    }
}

export default login;