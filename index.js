//Require inquirer and chalk
const inq = require("inquirer");
const chalk = require("chalk");

//Require Builder and Helper
const Builder = require("./lib/Builder");
const Helper = require("./lib/Helper");

//Initialize a new helper
const helpSys = new Helper;

//Set the constant 'purple' equal to a chalk keyword
const purple = chalk.keyword("purple");

//Begin the program!
console.log("Welcome to " + purple("GeneREADME !"));
console.log("Here, you can easily generate a README.md file!");
console.log('');
helpSys.init();