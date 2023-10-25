#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const electric = Math.ceil(Math.random() * 100000 + 1);
const gas = Math.ceil(Math.random() * 100000 + 1);
const telephone = Math.ceil(Math.random() * 100000 + 1);
async function utilityBills(balance) {
    const utility = await inquirer.prompt([
        {
            name: "bill",
            type: "list",
            choices: ["electric", "gas", "telephone"],
            message: chalk.blue("Please select from options to pay bills:")
        }
    ]);
    if (utility.bill == "electric") {
        console.log(chalk.green(`Your bill is ${electric}`));
        balance -= electric;
    }
    else if (utility.bill == "gas") {
        console.log(chalk.green(`Your bill is ${gas}`));
        balance -= gas;
    }
    else if (utility.bill == "telephone") {
        console.log(chalk.green(`Your bill is ${telephone}`));
        balance -= telephone;
    }
    return balance;
}
export default utilityBills;
