const inquirer = require('inquirer');

function initialPrompt() {
    inquirer.prompt([
        {
            type: `list`,
            name: `action`,
            message: `What would you like to do?`,
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
        }])
        .then(function (answer) {
            if (answer.title == "View all departments") {

            }
            else if (answer.title == "View all roles") {

            }
            else if (answer.title == "View all employees") {

            }
            else if (answer.title == "Add a department") {
                addDepartment();
            }
            else if (answer.title == "Add a role") {
                addRole();
            }
            else if (answer.title == "Add an employee") {
                addEmployee();
            }
            else if (answer.title == "Update an employee role") {
                updateEmployee();
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
            message: `Who is the employee's manager?`
        }
    ])
        .then(function (response) {

        })
};

function updateEmployee() {

};