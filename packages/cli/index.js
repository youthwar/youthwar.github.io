#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');
const template = require('./index.tmpl');
const snippetTemplate = require('./snippet.tmpl');

const blogLocation = [process.cwd(), '../../', 'apps/', 'yw_next/'];

inquirer
  .prompt([
    { type: 'input', name: 'articleName', message: 'What is the article title ?'},
    { type: 'input', name: 'url', message: 'What is the article url?'},
    { type: 'list', name: 'articleType', message: 'What type of article?', choices: ['algorithm', 'leetcode'] },
    { type: 'confirm', name: 'addSnippet', message: 'Add a code snippet?', default: false},
  ])
  .then(({ addSnippet, articleName, url, articleType}) => {
    const dirName = articleType === 'leetcode' ? `leetCode/${url}` : url;
    const snippetLocation = addSnippet ? path.resolve(...blogLocation, 'codesnippets/', `${dirName}`) : false; 
    const dir = path.resolve(...blogLocation, 'pages/articles/', dirName);
    
    if (snippetLocation) {
      fs.mkdirSync(snippetLocation, { recursive: true });
      try {
       fs.writeFileSync(`${snippetLocation}/index.ts`, snippetTemplate(), 'utf-8');
       fs.writeFileSync(`${snippetLocation}/implementation.ts`, snippetTemplate(), 'utf-8');
      } catch(err) {
        console.err(err);
      }
    }

    const defaultTempate = template({ date: new Date().toISOString(), title: articleName, snippet: snippetLocation ? `@codeSnippets/${dirName}` : undefined });

    fs.mkdirSync(dir, { recursive: true });
    try {
      fs.writeFileSync(`${dir}/index.mdx`, defaultTempate, 'utf-8');
      //file written successfully
    } catch (err) {
      console.error(err)
    }

    
  })
  .catch((error) => {});
  