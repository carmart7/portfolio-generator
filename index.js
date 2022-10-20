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
    fs.writeFile('portfolio.html',data,callback);

    console.log(data);
})
function writeHtml(data){
    let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfolio</title>
    </head>
    <body>
        <h1>${data.name}</h1>
        <ul>
            <li>Location:${data.location} </li>
            <li>Bio:${data.bio} </li>
            <li>LinkedIn Url:${data.linkedinurl} </li>
            <li>Github Url:${githuburl} </li>
        </ul>
    </body>
    </html>`
}