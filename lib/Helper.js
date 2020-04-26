//Require inquirer and chalk npms
const inq = require("inquirer");
const chalk = require("chalk");

//Require the Builder class
const Builder = require("./Builder");

//Set the const 'purple' equal to a chalk keyword
const purple = chalk.keyword("purple");

//Describe the Helper
class Helper {

    //Initialize the helper, both at the start of the program, and after helpMenu() is complete
    init() {
        inq.prompt({
            type: "confirm",
            message: "Would you like to view the help menu?",
            name: "addHelp"
        }).then((answers) => {
            if (answers.addHelp) {
                console.log('');
                this.helpMenu();
            }
            else {
                //if the user doesn't need more help, initialize an instance of the Builder.
                const buildSys = new Builder;
                buildSys.buildReadMe();
            }
        })
    }

    //Bring up the help menu using inquirer.prompt
    helpMenu() {
        const helpTopics = [
            "How does it work?",
            "What information do I need to provide?",
            "How can I add additional headings?",
            "How can I add additional links?",
            "How can I add additional images?",
            "How can I add code snippets?",
            "My repository/deployed links are not working."
        ];
        inq.prompt({
            type: "list",
            message: `I am the ${chalk.green("Help Genie!")} I know ${chalk.green("EVERYTHING")} ...about this app. What do you want to learn about?\n`,
            choices: helpTopics,
            name: "help"
        }).then((answers) => {
            let choice = 0;
            for (let i = 0; i < helpTopics.length; i++) {
                const topic = helpTopics[i];
                if (answers.help === topic) choice = i;
            }
            console.log('');
            switch (choice) {
                case 0: {
                    console.log(purple("GeneREADME") + " takes user input through the console and generates a README.md file. " +
                        purple("GeneREADME") + " is designed to work with Github. Therefore, the badges and URLs that are generated " +
                        "are designed to work using your GitHub username and repo name. At the end of the process, the README.md file" +
                        "is saved to the READMES/: yourRepoName directory.");
                    break;
                }
                case 1: {
                    console.log(`You will need:
                    - Your Github username.
                    - Your repo's name.
                    - A short description of your project.
                    - Descriptions of how to use it, how to install it, and how it was tested.
                    - A list of contributions/acknowledgements (if any).
                    - A list of dependencies.
                    - Several image URLs.`);
                    break;
                }
                case 2: {
                    console.log(`When prompted to enter text, you can add a heading or subheading within the text. The formats are as follows:
                # Heading
                ## Subheading 
                ### Subheading (Smaller)`);
                    break;
                }

                case 3: {
                    console.log(`To add an additional link, when prompted for text, within the text, use this format:
                [link text](linkUrl)`);
                    break;
                }

                case 4: {
                    console.log(`To add an additional image, when prompted for text, within the text, use this format:
                ![image alt text](imageUrl)`);
                    break;
                }

                case 5: {
                    console.log(`To add snippets of code within your text, use this format:
                \`\`\`html
                    <div id="sample">
                        <p>This is a p tag</p>
                    </div>
                \`\`\`
                'html' can be replaced with a language of your choice, via the file extension:
                cs,ts,js,html,css,md,xml,php,py,prg,cpp,bat,ini`);
                    break;
                }

                case 6: {
                    console.log(`Links to repos and deployed applications are fabricated using your Github username and your repo name. 
                
                The format used for deployed applications is:
                https://username.github.io/repoName/

                The format for repositories is:
                https://github.com/username/repoName/

If your link is not working, check that the URLs for your repo and your deployed application match this format.`);
                    break;
                }

                default: console.log("Something went wrong. Please select a valid choice.");

            }
            console.log('');
            this.init();
        })
    }
}

module.exports = Helper;