#! /usr/bin/env node
import inquirer from "inquirer";

//Intialize user balance andpin code

let myBlalnce = 500000; //Doller
let myPin = 9876;

//Print wellcome message

console.log("\n\t Wellcome to S-Z  ATM Machine\n")
  let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "Enter your pin code:",
            type:"number"
        }
        ])
if(pinAnswer.pin === myPin){
    console.log("Pin code is Correct, Login Successfully!");
    //console.log(`Current Account Balance is ${myBlalnce}`)

    let oprationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation:",
            choices: ["Withdraw Amount","Check Balance"]
        }
    ])
    if(oprationAns.operation === "Withdraw Amount"){
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to widthraw:"
            }
        ])
        if(amountAns.amount > myBlalnce){
            console.log("Insufficient Balance");
        }
        else{
            myBlalnce -= amountAns.amount;
            console.log(`${amountAns.amount} Withdraw Successfully!`);
            console.log(`Your Remaining Balance is ${myBlalnce}`);
        }

    }
    else if(oprationAns.operation === "Check Balance"){
        console.log(`Your Account Balance is: ${myBlalnce}`);

    }
}
else{
    console.log("Your Pin Code is Incorrect, Try Again!");
}