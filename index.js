const fs = require('fs');
const inquirer = require('inquirer');
const shipPage = require('./generatePage');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const employeeList = [];

const getManagerInfo = () => {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: "What is the manager's name?",
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
            message: "What is the employee's ID number?",
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
            type: 'input',
            name: 'officeNumber',
            message: "What is the employee's office number?",
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's office number!");
                    return false;
                }
            }
        }
    ]).then(info => {
        console.log(info);
        const manager = new Manager(info.name, info.employeeID, info.email, info.officeNumber);
        employeeList.push(manager);
        anotherEmployee();
    })
};

const getEngineerInfo = () => {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: "What is the employee's name?",
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
            message: "What is the employee's ID number?",
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
            type: 'input',
            name: 'github',
            message: "What is the employee's Github username?",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's Github username!");
                    return false;
                }
            }
        }
    ]).then(info => {
        console.log(info);
        const engineer = new Engineer(info.name, info.employeeID, info.email, info.github);
        employeeList.push(engineer);
        anotherEmployee();
    })
};

const getInternInfo = () => {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: "What is the employee's name?",
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
            message: "What is the employee's ID number?",
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
            type: 'input',
            name: 'school',
            message: "What is the employee's current school?",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's current school!");
                    return false;
                }
            }
        }
    ]).then(info => {
        console.log(info);
        const intern = new Intern(info.name, info.employeeID, info.email, info.school);
        employeeList.push(intern);
        anotherEmployee();
    })
};

// CHECK IF ANOTHER EMPLOYEE NEEDS TO BE ADDED
const anotherEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Do you need to add another employee?",
            choices: ['Manager', 'Engineer', 'Intern', 'No, all done'],
        }
    ])
    .then(function(response) {
        console.log(response);
        if (response.role === 'Manager') {
            getManagerInfo();
        } else if (response.role === 'Engineer') {
            getEngineerInfo();
        } else if (response.role === 'Intern') {
            getInternInfo();
        // NO MORE EMPLOYEES TO ADD, SO SEND EMPLOYEE ARRAY TO BE PUBLISHED AS HTML
        } else {
            console.log("Your page is coming soon!");
            createPage();
        }
    })
};

const createPage = () => {
    const pageContents = shipPage(employeeList);
    fs.writeFile("./dist/index.html", pageContents, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your HTML can be found in the dist folder");
        }
    });
};

getManagerInfo();

module.exports = employeeList;