const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");



function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "nameManager",
            message: "Enter name of the manager: "
        },
        {
            type: "input",
            name: "idManager",
            message: "Enter ID of the manager: "
        },
        {
            type: "input",
            name: "emailManager",
            message: "Enter email of the manager: "
        },
        {
            type: "input",
            name: "officeManager",
            message: "Enter office number of the manager: "
        },
        {
            type: "input",
            name: "nameEngineer",
            message: "Enter name of the engineer: "
        },
        {
            type: "input",
            name: "idEngineer",
            message: "Enter ID of the engineer: "
        },
        {
            type: "input",
            name: "emailEngineer",
            message: "Enter email of the engineer: "
        },
        {
            type: "input",
            name: "githubEngineer",
            message: "Enter GitHub Username of the engineer: "
        },
        {
            type: "input",
            name: "nameIntern",
            message: "Enter name of the intern: "
        },
        {
            type: "input",
            name: "idIntern",
            message: "Enter ID of the intern: "
        },
        {
            type: "input",
            name: "emailIntern",
            message: "Enter email of the intern:"
        },
        {
            type: "input",
            name: "linkedinIntern",
            message: "Enter linkedin account of the intern: "
        },
       
    ]);
  }
  

 
  const init = async () => {
    try {
      await promptUser();
  
      const html = fs.readFileSync("templates/Main.html");

      
      fs.writeFileSync(outputPath, html)
  
    } catch (err) {
      console.log(err);
    }
  };
  
  init();


  
