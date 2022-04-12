// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require('./Develop/utils/generateMarkdown')
const fs = require('fs');

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
            name: 'github',
            message: 'What is your github',
            validate: githubTitle => {
                if (githubTitle) {
                    return true;
                } else {
                    console.log("Please enter a valid profile")
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
            name: 'Installation',
            message: 'Please input any installation instructions',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log("Please enter valid installation instructions");
                    return false;
                }
            }
        },  
        {
            type: 'input',
            name: 'credits',
            message: 'Please input collaborators',
            validate: creditInput => {
                if (creditInput) {
                    return true;
                } else {
                    console.log("Please enter valid collaborators");
                    return false;
                }
            }
        },   
        
    ])
    .then((answers) => {
        writeToFile('generate-readeMe', answers)
    })
}

questions()

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => {

    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
