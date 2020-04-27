const Template = require("../lib/Template.js");

describe("Template", () => {
    it("should create a new template object given an answers object.", () => {
        const answers = {
            title: "title",
            mainImgUrl: "mainImgUrl",
            quickDescription: "quickDescription",
            deployed: true,
            userName: "userName",
            repoName: "repoName",
            introText: "introText",
            installImgUrl: "installImgUrl",
            installTxt: "installTxt",
            useImgUrl: "useImgUrl",
            usageTxt: "usageTxt",
            testTxt: "testTxt",
            contribTxt: "contribTxt",
            licenseName: "licenseName",
            yourName: "yourName",
            githubProfPicUrl: "githubProfPicUrl",
            dependenciesTxt: "dependenciesTxt"
        };
        const result =
            `# title
![Screenshot of repoName by userName](mainImgUrl)
quickDescription A link to the deployed version can be found [here.](https://userName.github.io/repoName/)
## Table of Contents

[Introduction](#introduction)  
[Installation](#installation)  
[Usage](#usage)  
[Tests](#tests)  
[Contributing](#contributing)  
[License](#license)  
[About the Author](#about-the-author)  

## Introduction

![GitHub language count](https://img.shields.io/github/languages/count/userName/repoName) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/userName/repoName) ![GitHub repo size](https://img.shields.io/github/repo-size/userName/repoName)

introText

## Installation
![Installation Image ](installImgUrl)

installTxt

### Dependencies

dependenciesTxt

## Usage
![Usage Image](useImgUrl)

usageTxt

## Tests

testTxt

## Contributing

contribTxt 

## License
### licenseName

![GitHub](https://img.shields.io/github/license/userName/repoName)


## About the Author

yourName

![your github profile pic](githubProfPicUrl)

Github: userName

Github repository: [github.com/userName](https://github.com/userName/)

Portfolio: [userName.github.io/](https://userName.github.io/)

README generated by GeneREADME. Original template written with [StackEdit](https://stackedit.io/). Badges provided through shields.io.
`
        const template = new Template(answers);

        expect(template.text).toEqual(result);
    })
})