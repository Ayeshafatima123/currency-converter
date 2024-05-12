import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgBlue("***CURRENCY CONVERT0R***"));
const currency = {
    USD: 1,
    PKR: 277.54,
    INR: 83.30,
    EUR: 0.92,
    NZD: 1.66,
    NPR: 133.08,
};
let userSelection = await inquirer.prompt([
    {
        name: "from",
        message: "SELECT  YOUR  CURRENCY WHICH YOU WANT  TO CONVERT",
        type: "list",
        choices: ["USD", "PKR", "INR", "EUR", "NDZ", "NPR"],
    },
    {
        name: "To",
        message: "SELECT YOUR CURRENCY WHICH YOY WANT  TO CONVERT",
        type: "list",
        choices: ["USD", "PKR", "INR", "EUR", "NDZ", "NPR"],
    },
    {
        name: "Amount",
        message: "HOW MUCH AMOUNT YOU WANT CONVERT",
        type: "number",
    }
]);
let fromlist = currency[userSelection.from]; //pkr 277.54
let tolist = currency[userSelection.To]; //1
let amount = userSelection.Amount; //5000
let BaseAmount = amount / fromlist; //5000 /277.54
let covertedAmount = BaseAmount * tolist;
let result = Math.round(covertedAmount);
console.log(chalk.bgMagenta(result));
