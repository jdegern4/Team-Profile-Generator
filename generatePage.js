const fs = require('fs');
const employeeList = require('./index');

const html = [];

const managerCard = (manager) => {
    let managerCardHtml = `
    <div class="column card has-background-light">
        <header class="card-header has-background-info has-text-light">
            ${manager.name}<br>
            <h3>Manager</h3>
        </header>
      <ul class="has-text-dark">
        <li>Employee ID: ${manager.employeeID}</li>
        <li>Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
        <li>Office Number: ${manager.officeNumber}</li>
      </ul>
    </div>
         `;
    html.push(managerCardHtml);
};

const engineerCard = (engineer) => {
    let engineerCardHtml = `
    <div class="column card has-background-light">
        <header class="card-header has-background-info has-text-light">
            ${engineer.name}<br>
            <h3>Engineer</h3>
        </header>
      <ul class="has-text-dark">
        <li>Employee ID: ${engineer.employeeID}</li>
        <li>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
        <li>Github: <a href="https://www.github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
      </ul>
    </div>
         `;
    html.push(engineerCardHtml);
};

const internCard = (intern) => {
    let internCardHtml = `
    <div class="column card has-background-light">
        <header class="card-header has-background-info has-text-light">
            ${intern.name}<br>
            <h3>Intern</h3>
        </header>
      <ul class="has-text-dark">
        <li>Employee ID: ${intern.employeeID}</li>
        <li>Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
        <li>School: ${intern.school}</li>
      </ul>
    </div>
         `;
    html.push(internCardHtml);
};



const shipPage = (employeeList) => {
    for (let i = 0; i < employeeList.length; i++) {
        if (employeeList[i].getRole() === "Manager") {
            managerCard(employeeList[i]);
        } else if (employeeList[i].getRole() === "Engineer") {
            engineerCard(employeeList[i]);
        } else if (employeeList[i].getRole() === "Intern") {
            internCard(employeeList[i]);
        }
    }

    const finalHTML = html.join('');
    generateFinalPage(finalHTML);
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
        <header>
            <h1>Our Team</h1>
        </header>
  
        <main>
            <div class="columns">
                ${html}
            </div>
        </main>
    </body>
    </html>
    `
}

module.exports = shipPage;