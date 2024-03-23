#! /usr/bin/env node 

import inquirer from "inquirer";

let randomnumber = Math.floor(Math.random() * 3)

console.log("\n\n\tWelcome To Number Guessing Game.\n\n \tGuess the Number Between 1 to 3.\n\n\t\t'CONDITION'\n\n\tYour First Number or Second Number are Same enter then your are win ! \n\n")

const answer = await inquirer.prompt([{
    message: "Enter your Guess Number !",
    type: "number",
    name: "Your_Guess_Number",
},
{message: "Enter your Second Guess Number",
type: "number",
name: "Your_Second_Guess_number"},

])


if(answer.Your_Guess_Number === randomnumber){
    console.log("'Congratulation'! Your Guessed Number is Match")
}
if(answer.Your_Second_Guess_number = answer.Your_Guess_Number === randomnumber){
    console.log("")
}
else{
    console.log("Your Guessed Number is Not Match Please Try Again !")
}



