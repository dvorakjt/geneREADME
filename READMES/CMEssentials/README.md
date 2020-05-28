# CMEssentials
![Screenshot of CMEssentials by dvorakjt](./assets/screenshots/screen-1.png)
This is a content management system that allows users to interact with a database of departments, employees and roles. A link to the repository can be found [here.](https://github.com/dvorakjt/CMEssentials)
## Table of Contents

[Introduction](#introduction)  
[Installation](#installation)  
[Usage](#usage)  
[Tests](#tests)  
[Contributing](#contributing)  
[License](#license)  
[About the Author](#about-the-author)  

## Introduction

![GitHub language count](https://img.shields.io/github/languages/count/dvorakjt/CMEssentials) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/dvorakjt/CMEssentials) ![GitHub repo size](https://img.shields.io/github/repo-size/dvorakjt/CMEssentials)

The project uses a mysql database, an orm that I wrote to "talk" to the database, models for each table in the database that rely on the orm, and finally a user interface conducted using inquirer in the terminal. The user can add and view departments and roles, as well as add, view, and update employees.

## Installation
![Installation Image ](./assets/screenshots/screen-1.png)

To install the app, you will need to run the schema sql script in the schemas folder. Then, run npm install in the terminal to intall the dependencies from the package.json file. You will also need to create a .env file which contains the host name, user name and password name. From there, the application can be run from node.js in the terminal

### Dependencies

mysql, dotenv, inquirer

## Usage
![Usage Image](./assets/screenshots/screen-3.png)

Run the application in the terminal and follow the prompts to enter departments, roles and employees. At least one department in mandatory. I would recommend adding roles prior to adding employees, so that you do not have to update their roles later. However, the functionality is there if need. Delete functionality and update functionality for Departments and Roles is a target for future development.

## Tests

a

## Contributing

If you notice any flaws in the code, please submit a github issue. 

## License
### The project is licensed with an MIT license.

![GitHub](https://img.shields.io/github/license/dvorakjt/CMEssentials)


## About the Author

Joe Dvorak

![your github profile pic](https://avatars3.githubusercontent.com/u/61166366?v=4)

Github: dvorakjt

Github repository: [github.com/dvorakjt](https://github.com/dvorakjt/)

Portfolio: [dvorakjt.github.io/](https://userName.github.io/)

Email: dvorakjt@gmail.com

README generated by GeneREADME. Original template written with [StackEdit](https://stackedit.io/). Badges provided through shields.io.