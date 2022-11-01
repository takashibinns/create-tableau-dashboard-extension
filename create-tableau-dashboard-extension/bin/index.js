#! /usr/bin/env node

//  Dependencies'
const {execSync} = require('child_process');
const fs = require('fs')
const https = require('https');


/********************************************************************/
/*  Step 1: Make sure we have a name for our Dashboard Extension    */
/********************************************************************/

//  Remove the first 2 arguments (since they will always be 'npx' and 'create-tableau-dashboard-extension')
const args = process.argv.slice(2);

//  Verify additional arguments were passed
if (args.length < 1) {
  console.error('Please enter the name of your dashboard extension');
  process.exit(1); //an error occurred
}

//  Get the name of the new dashboard extension
const extName = args[0];
console.log(`Creating new dashboard extension named ${extName}`);

/********************************************************************/
/*  Step 2: Clone from github template                              */
/********************************************************************/

//  Define a function to download an archive from github
//  Stolen from: https://bonsaiilabs.com/create-npx-starter-command/
const runCommand = command => {
    try {
        execSync(`${command}`, {stdio: 'inherit'});
    } catch (e) {
        console.error(`Failed to execute ${command}`,e);
        return false;
    }
    return true;
}

// Command to clone from this template in Github
const gitCheckoutCOmmand = `git clone --depth 1 https://github.com/takashibinns/create-tableau-dashboard-extension ${extName}`;
console.log(`Cloning the repository with name ${extName}`);
const checkedOut = runCommand(gitCheckoutCOmmand);
if (!checkedOut) process.exit(-1);

/********************************************************************/
/*  Step 3: Create application-specific files                       */
/********************************************************************/

//  3.1 package.json


//  3.2 public/manifest.json


//  3.3 ${extName}.trex

/********************************************************************/
/*  Step 4: Download tableau dashboard extension api from CDN       */
/********************************************************************/


/********************************************************************/
/*  Step 5: run npm init, & let the user know how to get started    */
/********************************************************************/

//  Run NPM install to install all dependencies
const installDepsCommand = `cd ${extName} && npm install`;
const installDeps = runCommand(installDepsCommand);
if (!installDeps) process.exit(-1);


console.log("Dashboard Extension is ready, run the following commands to start");
console.log(`cd ${extName} && npm start`);
process.exit(0); //no errors occurred