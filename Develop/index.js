// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
function init() {
const questions = [
    {
        type: 'input',
        message: 'What is the title of your web application?',
        name: 'Title'
    },
    {
        type: 'input',
        message: 'Write a short description on your project and what problem it solves.',
        name: 'Description'
    },
    {
        type: 'input',
        message: 'Please paste a link to your deployed application.',
        name: 'appLink'
    },
    {
        type: 'input',
        message: 'Please paste a link to your github repository.',
        name: 'githubLink'
    },
    {
        type: 'input',
        message: 'Provide us with some features that are displayed in your application.',
        name: 'Features'
    },
    {
        type: 'input',
        message: 'Please describe directions to use your application properly.',
        name: 'Usage'
    },
    {
        type: 'input',
        message: 'Include any contributors in your project. If there are none, please include "N/A".',
        name: 'Contributors'
    },
    {
        type: 'list',
        message: 'Choose the license used in this project.',
        choices: ['MIT', 'Apache', 'Boost', 'Eclipse', 'Mozilla', 'Perl', 'ISC', 'None of the above'],
        name: 'License'
    },
    {
        type: 'input',
        message: 'Please include all sources used to make this project.',
        name: 'Sources'
    },]
    function writeToFile(questions) {
        inquirer.prompt(questions)
        .then((response) => {
            const generatemarkdown = generateMarkdown(response)
            fs.writeFile('README.md', generatemarkdown,() => {  console.log("error")})
            console.log(generatemarkdown)
        })
    }
    writeToFile(questions);
 }

// Function call to initialize app
init();


