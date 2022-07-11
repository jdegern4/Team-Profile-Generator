const inquirer = require("inquirer");
const Index = require('../index');

const getInfo = () => {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: 'What is the employee name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's name!");
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'employeeID',
            message: 'What is the employee ID number?',
            validate: employeeIDInput => {
                if (employeeIDInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's ID number!");
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'email',
            message: "What is the employee's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's email!");
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: "What is the employee's role?",
            choices: ['Manager', 'Engineer', 'Intern'],
            validate: roleInput => {
                if (roleInput) {
                    Employee.role = roleInput;
                    return true;
                } else {
                    console.log("Please enter the employee's name!");
                    return false;
                }
            }
        }])
};

function init() {
    getInfo()
    .then(answers => {
        console.log(answers);
        const mployee = new Em
    });
};

init();

// module.exports = Employee;