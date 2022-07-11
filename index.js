const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const employeeList = [];

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
        let employeeCount = 0;
        if (answers.role === 'Manager') {
            getManagerInfo();
        } else if (answers.role === 'Engineer') {
            getEngineerInfo();
        } else if (answers.role === 'Intern') {
            getInternInfo();
        }
    });
};

const getManagerInfo = (employee) => {
    return inquirer.prompt({
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number?'
    })
    .then(({employee, officeNumber}) => {
        console.log(employee, officeNumber);
    });
};

const anotherEmployee = () => {
    getInfo();
};