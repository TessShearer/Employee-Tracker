const inquirer = require('inquirer');
const db = require('./db/connection');

initialPrompt()

function initialPrompt() {
    inquirer.prompt(
        {
            type: `list`,
            name: `action`,
            message: `What would you like to do?`,
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'quit']
        })
        .then(function (answer) {
            console.log({answer})
            if (answer.action === "View all departments") {
                db.query('SELECT * FROM department',function(error,data,fields){
                    if (error) throw error;
                    console.table(data)
                })
                initialPrompt();
            }
            else if (answer.action == "View all roles") {
                db.query('SELECT * FROM role',function(error,data,fields){
                    if (error) throw error;
                    console.table(data)
                })
                initialPrompt();
            }
            else if (answer.action == "View all employees") {
                db.query('SELECT * FROM employee',function(error,data,fields){
                    if (error) throw error;
                    console.table(data)
                })
                initialPrompt();
            }
            else if (answer.action == "Add a department") {
                addDepartment();
            }
            else if (answer.action == "Add a role") {
                addRole();
            }
            else if (answer.action == "Add an employee") {
                addEmployee();
            }
            else if (answer.action == "Update an employee role") {
                updateEmployee();
            }
            else if (answer.action == "quit") {
                return console.log('exiting program')
            }
        }
        )
};

function addDepartment() {
    inquirer.prompt([
        {
            type: `input`,
            name: `department`,
            message: `What is the name of the new department?`
        }])
        .then(function (response) {

        })
};

function addRole() {
    inquirer.prompt([
        {
            type: `input`,
            name: `role`,
            message: `What is the new role called?`
        },
        {
            type: `input`,
            name: `salary`,
            message: `What is the salary for the new role?`
        },
        {
            type: `input`,
            name: `department`,
            message: `What department is the new role in?`
        }
    ])
        .then(function (response) {

        })
};

function addEmployee() {
    inquirer.prompt([
        {
            type: `input`,
            name: `first`,
            message: `What is the employee's first name?`
        },
        {
            type: `input`,
            name: `last`,
            message: `What is the employee's last name?`
        },
        {
            type: `input`,
            name: `role`,
            message: `What is the employee's role?`
        },
        {
            type: `input`,
            name: `manager`,
            message: `Who is the employee's manager (first and last name)?`
        }
    ])
        .then(function (response) {

        })
};

function updateEmployee() {

};