
const inquirer = require('inquirer');
/*
require("dotenv").config();
const mysql = require('mysql2')

const database = mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

database.connect(function (error) {
    if (error) throw error;

    console.log(`You've connected to the Database!`)
    prompter()
});
*/

function viewQuery(params, terminalResponse) {
    database.query(params, function (error, response) {
        if (error) throw error;
        console.table(response);
        console.log(
            `${terminalResponse}`
        ); prompter();
    });
}


function addDepartment(params, addition) {
    database.query(params, `{${addition}}`, function (error) {
        if (error) throw error;
        console.log("Done!")
        dealWithChoices(answer === "View all of the departments");
    })
};

function addEmployee(params, addition) {
    database.query(params, `{${addition}}`, function (error) {
        if (error) throw error;
        console.log("Done!")
        dealWithChoices(answer === "View all of the employees");
    })
};

function addRole(params, addition) {
    database.query(params, `{${addition}}`, function (error) {
        if (error) throw error;
        console.log("Done!")
        dealWithChoices(answer === "View all of the employee roles");
    })
};

module.exports = viewQuery, addDepartment, addEmployee, addRole;