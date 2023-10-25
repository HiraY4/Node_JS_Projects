#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
import login from "./atm_modules/login.js";

(async () => {
        await showBanner ('ATM', 'AUTOMATED TELLER MACHINE FOR BALANCE INQUIRY, TRANSACTIONS AND BILLING', 'red', 'grey')
    })();

setTimeout(()=>{
    login()
    }, 1000)
