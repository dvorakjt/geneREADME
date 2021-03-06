# Burger Buddy
![Screenshot of burger-buddy by dvorakjt](public/assets/screenshots/screen-1.png)
This is a full-stack web application which allows users to create, read, update and delete entries (representing burgers) into an online database. A link to the deployed version can be found [here.](https://dvorakjt.github.io/burger-buddy/)
## Table of Contents

[Introduction](#introduction)  
[Installation](#installation)  
[Usage](#usage)  
[Tests](#tests)  
[Contributing](#contributing)  
[License](#license)  
[About the Author](#about-the-author)  

## Introduction

![GitHub language count](https://img.shields.io/github/languages/count/dvorakjt/burger-buddy) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/dvorakjt/burger-buddy) ![GitHub repo size](https://img.shields.io/github/repo-size/dvorakjt/burger-buddy)

This project uses a MySql database hosted via Jaws DB on Heroku to create, read, update and delete burgers based on user input. An ORM interacts with the DB, which is in turn further abstracted via the burger model. The functions in this model are invoked by the burgers_controller file, which contains routes which invoke CRUD commands via the burger model. The controllers file also uses res.render to display handlebars templates filled in with data obtained from the database.

## Installation
![Installation Image ](public/assets/screenshots/screen-2.png)

No installation necessary! Simply navigate to the deployed heroku page.

### Dependencies

dotenv, mysql, express, express-handlebars

## Usage
![Usage Image](public/assets/screenshots/screen-3.png)

To add a burger, click the "Add burger" button, and fill in all of the fields. Then click "submit." From the main page, you can also "devour" a burger, which will update the devoured field in the database, refresh the page and it will be moved to the right column. You can also delete burgers by clicking the X button to the right of each entry.

## Tests

This project was tested manually.

## Contributing

If you notice any problems with the code, please submit a github issue. 

## License
### N/A

![GitHub](https://img.shields.io/github/license/dvorakjt/burger-buddy)


## About the Author

Joe Dvorak

![your github profile pic](https://avatars3.githubusercontent.com/u/61166366?v=4)

Github: dvorakjt

Github repository: [github.com/dvorakjt](https://github.com/dvorakjt/)

Portfolio: [dvorakjt.github.io/](https://userName.github.io/)

Email: dvorakjt@gmail.com

README generated by GeneREADME. Original template written with [StackEdit](https://stackedit.io/). Badges provided through shields.io.
