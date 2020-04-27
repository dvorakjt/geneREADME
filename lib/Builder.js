const chalk = require("chalk");
const inq = require("inquirer");
const axios = require("axios");
const purple = chalk.keyword("purple");
const Template = require("./template");

class Builder {
    buildReadMe() {
        console.log("The " + purple("GeneREADME Genie asks you..."));
        inq.prompt([
            {
                type: "input",
                message: "What is your name?",
                name: "yourName"
            },
            {
                type: "input",
                message: "What is your Github username?",
                name: "userName"
            },
            {
                type: "input",
                message: "What is the title of your project?",
                name: "title"
            },
            {
                type: "input",
                message: "What is the name of this project's repo?",
                name: "repoName"
            },
            {
                type: "confirm",
                message: "Is the application deployed?",
                name: "deployed"
            },
            {
                type: "input",
                message: "Enter the URL for the main image.",
                name: "mainImgUrl"
            },
            {
                type: "input",
                message: "Enter a short (1 - 2 sentence) description of your project.",
                name: "quickDescription"
            },
            {
                type: "input",
                message: "Please describe the project in more detail.",
                name: "introText"
            },
            {
                type: "input",
                message: "Please provide the URL for an image associated with installing the application.",
                name: "installImgUrl"
            },
            {
                type: "input",
                message: "Please describe how to install your app.",
                name: "installTxt"
            },
            {
                type: "input",
                message: "Please enter the URL for an image of the application in use.",
                name: "useImgUrl"
            },
            {
                type: "input",
                message: "Please describe how to use your application.",
                name: "usageTxt"
            },
            {
                type: "input",
                message: "Please describe how your project was tested.",
                name: "testTxt"
            },
            {
                type: "input",
                message: "Please describe how to contribute.",
                name: "contribTxt"
            },
            {
                type: "input",
                message: "Please list any Licenses.",
                name: "licenseName"
            },
            {
                type: "input",
                message: "List any dependences.",
                name: "dependenciesTxt"
            }
        ]).then((answers) => {
            axios.get(`https://api.github.com/users/${answers.userName}`).then(function (response) {
                const githubProfPicUrl = response.data.avatar_url;
                answers["githubProfPicUrl"] = githubProfPicUrl;
                const yourREADME = new Template(answers);
                yourREADME.geneReadMe();
            });
        });
    }
}

module.exports = Builder; 