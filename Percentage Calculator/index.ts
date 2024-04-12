#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

console.log("\n");

console.log(chalk.bold.bgMagentaBright("\t\t\t\t *****WELCOME TO PERCENTAGE CALCULATOR*****\t\t"));

console.log("\n");

let answer= await inquirer.prompt([
    {
        name: "obtainMarks",
        type:"number",
        message:chalk.hex("2900FA")("Enter Your Obatain Marks:"),
    },
    {
        name: "Totalmarks",
        type:"number",
        message:chalk.magenta("Enter your Total Marks:"),
    }
])
console.log("\n");

let result= answer.obtainMarks*100/answer.Totalmarks;

console.log(chalk.hex("37F012")("Congratulation Your Percentage is:",chalk.hex("F57A00")(result.toPrecision(4)+"%")))

console.log("\n");


console.log(chalk.bold.bgMagentaBright("\t\t\t\t\t *****THANK YOU*****\t\t"));
