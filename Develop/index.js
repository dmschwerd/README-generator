// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "project-title",
        message: "What is this project titled?"
    },
    {
        type: "input",
        name: "description",
        message: "What is this project's description?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions?"
    },
    {
        type: "input",
        name: "usage",
        message: "What is this project used for?"
    },
    {
        type: "list",
        name: "license",
        message: "Which license did you use for this project?",
        choices: ["Apache-2.0", "BSD-3-Clause", "BSD-2-Clause", "gpl-license", "lgpl-license", "MIT", "MPL-2.0", "CDDL-1.0", "EPL-2.0", "None"]
    },
    {
        type: "input",
        name: "contributing",
        message: "Who contributed to this project?"
    },
    {
        type: "input",
        name: "tests",
        message: "Were there any tests run for this project?"
    },
    {
        type: "input",
        name: "github-username",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "email-address",
        message: "What is your email address?"
    }

]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./Develop'+fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
