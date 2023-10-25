#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import cashWithdrawal from "./withdraw.js";
import cashDeposit from "./deposit.js";
import transferCash from "./transfer.js";
import utilityBills from "./bill.js";


async function anotherTaransaction () {
    let another = await inquirer.prompt([
        {
            name: "Transaction",
            type: "list",
            choices: ["Yes","No"],
            message: chalk.yellow("Would you like to make another transation? Yes or No:")
        }
    ]);
        return another.Transaction;
}

async function mainScreen(balance:number){
do {
    const options = await inquirer.prompt([
        {
            name:  "menu",
            type: "list",
            choices: ["Balance Inquiry","Cash Withdraw","Cash Deposit","Transfer Money","Utility Bills","Exit"],
            message: chalk.yellow("Please select from options to proceed")
        }
    ]);
    switch(options.menu){
        case "Balance Inquiry":
        console.log(chalk.green(`Your current balance is ${balance}`));
        break;
        case "Cash Withdraw":
        balance = await cashWithdrawal(balance)
        console.log(chalk.green(`Your cash withdrawal is successfully completed. Your new balance is ${balance}`));
        break;
        case "Cash Deposit":
        balance = await cashDeposit(balance)
        console.log(chalk.green(`Your cash deposit is successfully completed. Your new balance is ${balance}`));
        break;
        case "Transfer Money":
        balance = await transferCash(balance);
        console.log(chalk.green(`Your cash transfer is successfully completed. Your new balance is ${balance}`));
        break;
        case "Utility Bills":
        balance = await utilityBills(balance);
        console.log(chalk.green(`Your utility bill has successfully been paid. Your new balance is ${balance}`));
        break;
        case "Exit":
        anotherTrans = "No";
        break;
        } 
        if (options.menu !== "Exit"){
            var anotherTrans = await anotherTaransaction();    
        } 
        if (anotherTrans == "No") {
            console.log(chalk.grey.italic(`Thank you for using our service.`));
        }    
    } while (anotherTrans != "No")
}

export default mainScreen;

