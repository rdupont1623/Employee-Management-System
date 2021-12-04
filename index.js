
let mysql = require('mysql2')
let ctable = require('console.table');
const inquirer = require('inquirer');
require("dotenv").config();


const viewQuery = require('./db/dblogic');
const addDepartment = require('./db/dblogic');
const addEmployee = require('./db/dblogic');
const addRole = require('./db/dblogic');

require("dotenv").config();

const database = mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});
/*
database.connect(function (error) {
    if (error) throw error;
    
    console.log(`You've connected to the Database!`)
    prompter()
});
*/

prompter();

function prompter() {
    inquirer.prompt([
        {
            name: 'questions',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View all of the departments',
                'View all of the employees',
                'View all employee roles',
                'Add a new department',
                'Add a new employee',
                'Add a new role',
                `Update an employee role`,
            ]
        }
    ])
        .then(function dealWithChoices(answer) {
            switch (answer) {
                case 'view all departments':
                    if (answer === 'View all of the departments') {
                        let params = "SELECT * from department";
                        let terminalResponse = "Here are the departments!";
                        viewQuery(params, terminalResponse);
                    } break;

                case 'view all employees':
                    if (answer === 'View all of the employees') {
                        let params = "SELECT * from employee";
                        let terminalResponse = "Here are the employees!";
                        viewQuery(params, terminalResponse);
                    } break;

                case 'view all roles':
                    if (answer === 'View all of the employee roles') {
                        let params = "SELECT * from roles";
                        let terminalResponse = "Here are the roles!";
                        viewQuery(params, terminalResponse);
                    } break;

                case 'add a new department':
                    if (answer === 'Add a new department') {
                        inquirer.prompt([
                            {
                                name: "newDepartment",
                                type: "input",
                                message: "Enter the new department name here"
                            }
                        ])
                            .then(function (response) {
                                let params = "INSERT INTO department SET ?";
                                let addition = `dept_name: ${response.newDepartment}`;

                                addDepartment(params, addition);
                                prompter()
                            })
                    } break;
                case 'add a new employee':
                    if (answer === 'Add a new employee') {
                        inquirer.prompt([
                            {
                                name: "newEmployee",
                                type: "input",
                                message: "Enter the new employee name here"
                            },
                            {
                                name: "newEmployeeId",
                                type: "input",
                                message: "Enter the new employees ID number"
                            }
                        ])
                            .then(function (response) {
                                let params = "INSERT INTO employee SET ?";
                                let addition = `employee_name: ${response.newDepartment}, role_id: ${response.newEmployeeId}`;

                                addRole(params, addition);
                                prompter()
                            })
                    } break;
                case 'add a new role':
                    if (answer === 'Add a new role') {
                        inquirer.prompt([
                            {
                                name: "newRole",
                                type: "input",
                                message: "Enter the new role name here"
                            },
                            {
                                name: "newRoleSalary",
                                type: "input",
                                message: "Enter the salary of the new role here"
                            },
                            {
                                name: "newRoleId",
                                type: "input",
                                message: "Enter the Id of the new role here"
                            },
                        ])
                            .then(function (response) {
                                let params = "INSERT INTO employee_role SET ?";
                                let addition = `role_title: ${response.newRole}, salary: ${response.newRoleSalary}, dept_id: ${response.newRoleId}`;

                                addEmployee(params, addition);
                                prompter()
                            })
                    } break;
                case 'update an employee role':
                    if (answer === 'Update an employees role') {
                        database.query("SELECT * FROM employee", function (error, response) {
                            if (error) throw error;

                            inquirer.prompt([
                                {
                                    name: "whoToUpdate",
                                    type: "list",
                                    message: "Who do you want to update?",
                                    choices: function () {
                                        options = [];
                                        for (employees = 0; employees < response.length; employees++) {
                                            options.push(response.employee_name);
                                        } return options;
                                    }
                                },
                                {
                                    name: "updated",
                                    type: "input",
                                    message: "What is this employees new role?"
                                },
                            ])
                                .then(function (response) {
                                    function findId() {
                                        for (ids = 0; ids < response.length; ids++) {
                                            let employeeName = response[ids].employee_name;
                                            if (response.whoToUpdate === employeeName) {
                                                return response[ids].id;
                                            }
                                        }
                                    }

                                    database.query(
                                        "UPDATE employee SET ? WHERE ?",
                                        [{
                                            role_id: response.updated,
                                        },
                                        {
                                            id: findId(),
                                        },],
                                        function (error) {
                                            if (error) throw error;
                                        }
                                    )
                                })
                        })
                    } break
            }
        });
};
module.exports = prompter;