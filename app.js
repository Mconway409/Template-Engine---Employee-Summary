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
            message: "Enter name of Manager: "
        },
        {
            type: "input",
            name: "idManager",
            message: "Enter ID of manager: "
        },
        {
            type: "input",
            name: "emailManager",
            message: "Enter email of manager: "
        },
        {
            type: "input",
            name: "officeManager",
            message: "Enter office number of manager: "
        },
        {
            type: "input",
            name: "nameEngineer1",
            message: "Enter name of engineer number 1: "
        },
        {
            type: "input",
            name: "idEngineer1",
            message: "Enter ID of engineer number 1: "
        },
        {
            type: "input",
            name: "emailEngineer1",
            message: "Enter email of engineer number 1: "
        },
        {
            type: "input",
            name: "githubEngineer1",
            message: "Enter GitHub Username of engineer number 1: "
        },
        {
            type: "input",
            name: "nameEngineer2",
            message: "Enter name of engineer number 2: "
        },
        {
            type: "input",
            name: "idEngineer2",
            message: "Enter ID of engineer number 2: "
        },
        {
            type: "input",
            name: "emailEngineer2",
            message: "Enter email of engineer number 2: "
        },
        {
            type: "input",
            name: "githubEngineer2",
            message: "Enter GitHub Username of engineer number 2: "
        },
  
        {
            type: "input",
            name: "nameEngineer3",
            message: "Enter name of engineer number 3: "
        },
        {
            type: "input",
            name: "idEngineer3",
            message: "Enter ID of engineer number 3: "
        },
        {
            type: "input",
            name: "emailEngineer3",
            message: "Enter email of engineer number 3: "
        },
        {
            type: "input",
            name: "githubEngineer3",
            message: "Enter GitHub Username of engineer number 3: "
        },
        
  
        {
            type: "input",
            name: "nameIntern",
            message: "Enter name of Intern: "
        },
        {
            type: "input",
            name: "idIntern",
            message: "Enter ID of Intern: "
        },
        {
            type: "input",
            name: "emailIntern",
            message: "Enter email of Intern:"
        },
        {
            type: "input",
            name: "linkedinIntern",
            message: "Enter linkedin account of intern: "
        },
       
    ]);
  }
  
  
  const init = async () => {
    try {
      await promptUser();
  
      const htmlString = await render(employees);

      
      fs.writeFileSync(outputPath, html)
  
    } catch (err) {
      console.log(err);
    }
  };
  
  init();
  
