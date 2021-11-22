#!/usr/bin/env node

const inquirer = require('inquirer');
inquirer
  .prompt([
    { type: 'input', name: 'articleName', message: 'What is the article name ?'},
    { type: 'list', name: 'articleType', message: 'What type of article?', choices: ['algorithm', 'leetcode'] },
    { type: 'input', name: 'articleDirName', message: ' ?'},
  ])
  .then((answers) => {
    console.log(answers);
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });