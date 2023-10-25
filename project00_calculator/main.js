#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const node_banner_1 = __importDefault(require("node-banner"));
const gradient_string_1 = __importDefault(require("gradient-string"));
const chalk_1 = __importDefault(require("chalk"));
const functions_jss_1 = require("./functions.jss");
let answers = [
    {
        name: "number1",
        type: "number",
        message: chalk_1.default.blue("please add a number: "),
        validate: (input) => {
            if (isNaN(input)) {
                return "please enter a number:";
            }
            return true;
        }
    },
    {
        name: "number2",
        type: "number",
        message: chalk_1.default.blue("please add a number: "),
        validate: (input) => {
            if (isNaN(input)) {
                return "enter a number please:";
            }
            return true;
        }
    },
    {
        name: "Operator",
        type: "list",
        choices: ["+", "-", "*", "/", "^"],
        message: chalk_1.default.white("select operator:"),
    }
];
let answer = [
    {
        name: "again",
        type: "confirm",
        message: "Would you like to use the calculator again? "
    }
];
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, node_banner_1.default)('The Calculator', 'it is used for multiple calculations!!', 'red', 'blue');
}))();
function calculator() {
    return __awaiter(this, void 0, void 0, function* () {
        let condition = true;
        while (condition) {
            let { number1, number2, Operator } = yield inquirer_1.default.prompt(answers);
            if (Operator === "+") {
                console.log(gradient_string_1.default.rainbow(`the result is ` + (0, functions_jss_1.add)(number1, number2)));
            }
            else if (Operator === "-") {
                console.log(gradient_string_1.default.rainbow(`the result is ` + (0, functions_jss_1.subtract)(number1, number2)));
            }
            else if (Operator === "*") {
                console.log(gradient_string_1.default.rainbow(`the result is ` + (0, functions_jss_1.multiply)(number1, number2)));
            }
            else if (Operator === "/") {
                console.log(gradient_string_1.default.rainbow(`the result is ` + (0, functions_jss_1.divide)(number1, number2)));
            }
            else if (Operator === "^") {
                console.log(gradient_string_1.default.rainbow(`the result is ` + Math.pow(number1, number2)));
            }
            let { again } = yield inquirer_1.default.prompt(answer);
            condition = again;
        }
    });
}
setTimeout(() => {
    calculator();
}, 500);
