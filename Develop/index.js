// TODO: Include packages needed for this application
//Done
// TODO: Create an array of questions for user input
const inquirer = require('inquirer');
const fs = require('fs');


const questions = [
  {
    type: 'input',
    name: 'Table of Contents',
    message: 'Table of Contents:',
  },
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
      ["MIT", "GPLv3", "GPL"]
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
    name: "Email",
    message: "Enter contact email:",
  }
]

// .then((data) => {
//     const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
//   });

// // TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(resp => {
    console.log(resp)
    generateReadMe(resp)
  });
}

 function generateReadMe(resp) {

  const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

  fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) => {
    err ? console.log(err) : console.log('Success!')})
}





// Function call to initialize app
init();
