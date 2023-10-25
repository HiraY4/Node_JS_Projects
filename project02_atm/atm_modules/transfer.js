#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
async function transferCash(balance) {
    const transfer = await inquirer.prompt([
        {
            name: "accountNumber",
            type: "number",
            message: chalk.blue("Please enter account number to transfer cash:")
        },
        {
            name: "amount",
            type: "number",
            message: chalk.blue("Please enter amount for transfer:")
        }
    ]);
    balance -= transfer.amount;
    return balance;
}
export default transferCash;
