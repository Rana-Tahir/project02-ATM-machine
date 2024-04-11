import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.cyanBright("Welcome to ATM machine"));
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userID",
        message: "Enter your ID:",
    },
    {
        type: "number",
        name: "userPin",
        message: "Enter your Pin:",
    },
    {
        type: "list",
        name: "account type",
        choices: ["current", "saving"],
        message: "Select your Account Type"
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Cash withdraw", "Fast Cash", "Balance inquiry"],
        message: "Select your Transaction Type"
    },
    {
        type: "number",
        name: "amount",
        message: "Enter Amount you want to withdraw",
        when(answers) {
            return answers.transactionType === "Cash withdraw";
        },
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2500, 5000, 10000, 50000],
        message: "Select your transaction amount:",
        when(answers) {
            return answers.transactionType === "Fast Cash";
        }
    },
]);
const userID = answers.userID;
const userPin = answers.userPin;
const enteredamount = answers.enteredamount;
if (answers.transactionType === "Balance inquiry") {
    const balance = Math.floor(Math.random() * 100000);
    console.log(chalk.greenBright(`Your Current Balance is Rs ${balance}\n`));
}
else if (answers.userID && answers.userPin) {
    const balance = Math.floor(Math.random() * 1000000);
    console.log(balance);
    const enteredamount = answers.amount;
    if (balance > enteredamount) {
        console.log(chalk.redBright(`Your account has been debited with Rs ${enteredamount} and your remaining balance is Rs ${balance - enteredamount}`));
    }
    else {
        console.log(chalk.redBright("Insufficient balance"));
    }
}
;
