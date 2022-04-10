// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter a valid name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'project',
            message: 'What is the title of your project?',
            validate: projectTitle => {
                if (projectTitle) {
                    return true;
                } else {
                    console.log("Please enter a valid project title")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a description of your project',
            validate: descriptionEntry => {
                if (descriptionEntry) {
                    return true;
                } else {
                    console.log("Please provide a description of your project.")
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmInstallGuide',
            message: 'Does your project require an installation guide?',
            default: true
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter your installation steps.',
            when: ({ confirmInstallGuide }) => {
                if (confirmInstallGuide) {
                    return true;
                } else {
                    return false;
                }
            }
        }        
    ])
}

                

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
