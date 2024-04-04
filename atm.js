#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
let myBalane = 10000; //Dollars
let myPincode = 5287;
console.log(chalk.blueBright("\n \t Welcome to HashTech Coding - ATM Machine \n"));
let pinAns = await inquirer.prompt([
    {
        name: "pin",
        message: chalk.yellowBright("Enter your pin code: "),
        type: "number"
    }
]);
if (pinAns.pin === myPincode) {
    console.log(chalk.green("\nCorrect Pin code, Login Successfully!\n"));
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: chalk.blue("Please Select option."),
            type: "list",
            choices: ["Withdraw", "Check Blanace"]
        }
    ]);
    if (operationAns.operation === "Withdraw") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                message: chalk.yellow("\nSelect your withdrawl method : "),
                type: "list",
                choices: ["Fast Cash", "Enter Amount"]
            }
        ]);
        if (withdrawAns.withdrawMethod === "Fast Cash") {
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fastCashamount",
                    type: "list",
                    message: "Select Amount :",
                    choices: [1000, 2000, 5000, 8000,]
                }
            ]);
            if (fastCashAns.fastCashamount > myBalane) {
                console.log(chalk.red("Insufficient Balance!"));
            }
            else {
                myBalane -= fastCashAns.fastCashamount;
                console.log(chalk.greenBright(fastCashAns.fastCashamount) + " PKR withdrawn successfully.\nYour remaining balance is " + chalk.greenBright(myBalane) + " PKR");
            }
        }
        else if (withdrawAns.withdrawMethod === "Enter Amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "\nEnter your amount",
                }
            ]);
            if (amountAns.amount > myBalane) {
                console.log("Insufficient balance.");
            }
            else {
                myBalane -= amountAns.amount;
                console.log(chalk.greenBright(amountAns.amount) + " PKR withdrawn successfully.\nYour remaining balance is " + chalk.greenBright(myBalane) + " PKR");
            }
        }
    }
    else if (operationAns.operation === "Check Blanace") {
        console.log(`\nYour account balance is : ${myBalane} PKR`);
    }
}
else {
    console.log(chalk.red("\nIncorrect Pincode!"));
}
