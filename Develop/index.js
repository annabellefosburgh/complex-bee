// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMD = require(generateMarkdown)

// TODO: Create an array of questions for user input
inquirer
    prompt ([
        {type: 'input',
         message: 'What is the title of your web application?',
         name: 'Title'
        },
        {type: 'input',
         message: 'Write a short description on your project and what problem it solves.',
         name: 'Description'
        },
        {type: 'input',
         message: 'Please paste a link to your deployed application.',
         name: 'appLink'
        },
        {type: 'input',
         message: 'Please paste a link to your github repository.',
         name: 'githubLink'
        },
        {type: 'input',
         message: 'Provide us with some features that are displayed in your application.',
         name: 'Features'
        },
        {type: 'input',
         message: 'Please describe directions to use your application properly.',
         name: 'Usage'
        },
        {type: 'input',
         message: 'Include any contributors in your project. If there are none, please include "N/A".',
         name: 'Contributors'
        },
        {type: 'input',
         message: 'Please include all sources used to make this project.',
         name: 'Sources'
        },
    ])
    // TODO: Create a function to write README file
    .then(data) => {
        const {Title, Description, appLink, githubLink, Features, Usage, Contributors, Sources} = data;
        const fileName = `README.md`;
        fs.writeFile(fileName, data), 
    }


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
