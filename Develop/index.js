// TODO: Include packages needed for this application
//Done
// TODO: Create an array of questions for user input
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdownJsFile = require('./utils/generateMarkdown');
// let markdownJs = generateMarkdownJsFile.generateMarkdown;

// generateMarkdownJsFile("fasdassa")

const questions = [
  {
    type: 'input',
    name: 'Title',
    message: 'Title:',
  },
  // {
  //   type: 'input',
  //   name: 'Table of Contents',
  //   message: 'Table of Contents:',
  // },
  {
    type: 'input',
    name: 'Description',
    message: 'Project description?',
  },
  {
    type: 'list',
    name: 'licenses',
    message: 'Licenses:',
    choices:
      ["MIT", "GPLv3", "GPL", "n/a"]
  },
  {
    type: 'input',
    name: 'Installation',
    message: 'Installation:',
  },
  {
    type: 'input',
    name: 'Credits',
    message: 'Credits:',
  },
  {
    type: 'input',
    name: 'Usage',
    message: 'Usage:',
  },
  {
    name: "Contributors",
    message: "Enter contibutors:"
  },
  {
    name: "Tests",
    message: "Enter tests:"
  },
  {
    name: "username",
    // message: "Enter contact email:",
    message: "Enter github username:",
  },
  {
    name: "email",
    // message: "Enter contact email:",
    message: "Enter your email:",
  }
]
// // TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(resp => {
    console.log(resp)
    generateReadMe(resp)
  });
}

 function generateReadMe(resp) {
  const mkdwnStr = generateMarkdownJsFile(resp)
  const filename = "README.md";

  fs.writeFile(filename, mkdwnStr, (err) => {
    err ? console.log(err) : console.log('Success!')})
}

// Function call to initialize app
init();
