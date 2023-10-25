#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
async function otherAmount(balance) {
    const other = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: chalk.blue("Please enter the amount for withdrawal:")
        }
    ]);
    if (other.amount < balance) {
        balance -= other.amount;
    }
    else {
        console.log(chalk.red(`You have insufficient balance`));
        balance = await otherAmount(balance);
    }
    ;
    return balance;
}
async function cashWithdrawal(balance) {
    const answers = await inquirer.prompt([
        {
            name: "amount",
            type: "list",
            choices: ["500", "1000", "2000", "5000", "10000", "Other Amount"],
            message: "Please select amount for transaction:"
        }
    ]);
    switch (answers.amount) {
        case "500":
            if (balance > Number(answers.amount)) {
                balance -= 500;
                console.log(chalk.green(`Your new balance is ${balance}`));
            }
            else {
                console.log(chalk.red(`You have insufficient balance!`));
            }
            break;
        case "1000":
            if (balance > Number(answers.amount)) {
                balance -= 1000;
                console.log(chalk.green(`Your new balance is ${balance}`));
            }
            else {
                console.log(chalk.red(`You have insufficient balance!`));
            }
            break;
        case "2000":
            if (balance > Number(answers.amount)) {
                balance -= 2000;
                console.log(chalk.green(`Your new balance is ${balance}`));
            }
            else {
                console.log(chalk.red(`You have insufficient balance!`));
            }
            break;
        case "5000":
            if (balance > Number(answers.amount)) {
                balance -= 5000;
                console.log(chalk.green(`Your new balance is ${balance}`));
            }
            else {
                console.log((chalk.red `You have insufficient balance!`));
            }
            break;
        case "10000":
            if (balance > Number(answers.amount)) {
                balance -= 10000;
                console.log(chalk.green(`Your new balance is ${balance}`));
            }
            else {
                console.log(chalk.red(`You have insufficient balance!`));
            }
            break;
        case "Other Amount":
            balance = await otherAmount(balance);
            console.log((chalk.green `Your new balance is ${balance}`));
            break;
    }
    return balance;
}
export default cashWithdrawal;
