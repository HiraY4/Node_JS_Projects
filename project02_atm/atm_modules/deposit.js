#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
async function cashDeposit(balance) {
    let cash = await inquirer.prompt([
        {
            name: "deposit",
            type: "number",
            message: chalk.blue("Please enter amount deposit cash:")
        }
    ]);
    balance += cash.deposit;
    return balance;
}
export default cashDeposit;
