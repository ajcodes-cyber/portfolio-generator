// Create new feature branch
// Install the Inquirer package
// Create the .gitignore file
// Validate answers
// Save your progress with git


const fs = require('fs');
const generatePage = require('./src/page-template');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});