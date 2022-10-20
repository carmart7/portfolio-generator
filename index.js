const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'location',
        message: 'What is your location?'
    },
    {
        type: 'input',
        name: 'bio',
        message: 'What is your bio?'
    },
    {
        type: 'input',
        name: 'linkedinurl',
        message: 'What is your LinkedIn Url?'
    },
    {
        type: 'input',
        name: 'githuburl',
        message: 'What is your Github Url?'
    }
]).then((data) => {
    console.log(data);
})