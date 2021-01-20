const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employees = [];

const promptUser = async () => {
  const input = await inquirer.prompt([
    {
      type: "list",
      name: "role",
      message: "What is the employee role?",
      choices: ["Manager", "Engineer", "Intern"],
    },
    {
      type: "input",
      name: "name",
      message: "What is the Manager's name?",
      when: (input) => input.role === "Manager",
    },
    {
      type: "input",
      name: "email",
      message: "What is the Manager's email?",
      when: (input) => input.role === "Manager",
    },
    {
      type: "input",
      name: "id",
      message: "What is the Manager's id?",
      when: (input) => input.role === "Manager",
    },
    {
      type: "input",
      name: "office",
      message: "What is the Manager's office number?",
      when: (input) => input.role === "Manager",
    },
    {
      type: "input",
      name: "name",
      message: "What is the Engineer's name?",
      when: (input) => input.role === "Engineer",
    },
    {
      type: "input",
      name: "email",
      message: "What is the Engineer's email?",
      when: (input) => input.role === "Engineer",
    },
    {
      type: "input",
      name: "id",
      message: "What is the Engineer's id?",
      when: (input) => input.role === "Engineer",
    },
    {
      type: "input",
      name: "github",
      message: "What is the Engineer's Github username?",
      when: (input) => input.role === "Engineer",
    },
    {
      type: "input",
      name: "name",
      message: "What is the Intern's name?",
      when: (input) => input.role === "Intern",
    },
    {
      type: "input",
      name: "email",
      message: "What is the Intern's email?",
      when: (input) => input.role === "Intern",
    },
    {
      type: "input",
      name: "id",
      message: "What is the Intern's id?",
      when: (input) => input.role === "Intern",
    },
    {
      type: "input",
      name: "school",
      message: "What is the Intern's school?",
      when: (input) => input.role === "Intern",
    },
    {
      type: "confirm",
      name: "more",
      message: "Are there any more employees to add?",
    },
  ]);

  return input;
};

const init = async () => {
  let cont = true;

  while (cont) {
    try {
      const answers = await promptUser();

      const { role, more } = answers;

      if (role === "Manager") {
        const manager = new Manager(
          answers.name,
          answers.id,
          answers.email,
          answers.office
        );
        employees.push(manager);
      } else if (role === "Engineer") {
        const engineer = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          answers.github
        );
        employees.push(engineer);
      } else {
        const intern = new Intern(
          answers.name,
          answers.id,
          answers.email,
          answers.school
        );
        employees.push(intern);
      }

      if (!more) {
        cont = false;
      }
    } catch (err) {
      console.log(err);
    }
  }
  console.log(employees);
  const html = await render(employees);

  fs.writeFileSync(outputPath, html);
};

init();
