const fs = require('fs');
const employeeList = require('./index');

const html = [];

const managerCard = (manager) => {
    let managerCardHtml = `
    <div class="column card has-background-light">
        <header class="card-header has-background-info has-text-light">
            <h3 class="ml-2">${manager.name}<br>
            Manager</h3>
        </header>
      <ul class="has-text-dark">
        <li class="ml-2">Employee ID: ${manager.employeeID}</li>
        <li class="ml-2">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
        <li class="ml-2">Office Number: ${manager.officeNumber}</li>
      </ul>
    </div>
         `;
    html.push(managerCardHtml);
};

const engineerCard = (engineer) => {
    let engineerCardHtml = `
    <div class="column card has-background-light">
        <header class="card-header has-background-info has-text-light">
            <h3 class="ml-2">${engineer.name}<br>
            Engineer</h3>
        </header>
      <ul class="has-text-dark">
        <li class="ml-2">Employee ID: ${engineer.employeeID}</li>
        <li class="ml-2">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
        <li class="ml-2">Github: <a href="https://www.github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
      </ul>
    </div>
         `;
    html.push(engineerCardHtml);
};

const internCard = (intern) => {
    let internCardHtml = `
    <div class="column card has-background-light">
        <header class="card-header has-background-info has-text-light">
            <h3 class="ml-2">${intern.name}<br>
            Intern</h3>
        </header>
      <ul class="has-text-dark">
        <li class="ml-2">Employee ID: ${intern.employeeID}</li>
        <li class="ml-2">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
        <li class="ml-2">School: ${intern.school}</li>
      </ul>
    </div>
         `;
    html.push(internCardHtml);
};



const shipPage = (employeeList) => {
    console.log("Testing");
    for (let i = 0; i < employeeList.length; i++) {
        if (employeeList[i].officeNumber) {
            managerCard(employeeList[i]);
        } else if (employeeList[i].github) {
            engineerCard(employeeList[i]);
        } else if (employeeList[i].school) {
            internCard(employeeList[i]);
        }
    }

    const finalHTML = html.join('');
    return generateFinalPage(finalHTML);
};

const generateFinalPage = (html) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma-rtl.min.css">
    <title>Our Team</title>
    </head>

    <body>
        <header class="hero is-link mb-3">
        <div class="hero-body">
            <h1 class="hero-title is-size-1 has-text-weight-bold">Our Team</h1>
        </div>
        </header>
  
        <main>
            <div class="columns m-3">
                ${html}
            </div>
        </main>
    </body>
    </html>
    `
}

module.exports = shipPage;