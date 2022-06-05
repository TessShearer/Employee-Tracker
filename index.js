const { prompt } = require('inquirer');
const inquirer = require('inquirer');
const { mainModule } = require('process');
const db = require('./db/connection');

const departmentArray = ['Grounds', 'Janitorial', 'IT', 'Management'];
const roleArray = ['leafblower', 'gardener', 'Snowplow', 'Trash Collector', 'Janitor', 'On and Off Again Guy', 'Systems Administrator', 'Grounds Manager', 'Janitorial Manager', 'IT Manager', 'Company Head'];
const managerArray = ['Abby', 'Ben', 'Carol', 'David'];

initialPrompt();

// Asks what the user would like to do, then calls the matching function
function initialPrompt() {
    inquirer.prompt(
        {
            type: `list`,
            name: `action`,
            message: `What would you like to do?`,
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'quit']
        })
        .then(function (answer) {
            if (answer.action === "View all departments") {
                viewDepartments();
            }
            else if (answer.action == "View all roles") {
                viewRoles();
            }
            else if (answer.action == "View all employees") {
                viewEmployees();
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
                quit();
            }
        })
};


// Functions to view tables
function viewDepartments() {
    db.query('SELECT * FROM department', function (error, data) {
        if (error) throw error;
        console.table(data)
    })
    initialPrompt();
};

function viewRoles() {
    db.query('SELECT role.*, department.dep_name AS dep_name FROM role LEFT JOIN department ON role.department_id = department.id', function (error, data) {
        if (error) throw error;
        console.table(data)
    })
    initialPrompt();
};

function viewEmployees() {
    db.query('SELECT employee.*, role.title AS role_title FROM employee LEFT JOIN role ON employee.role_id = role.id', function (error, data) {
        if (error) throw error;
        console.table(data)
    })
    initialPrompt();
};


// Functions to edit tables
function addDepartment() {
    inquirer.prompt([
        {
            type: `input`,
            name: `department`,
            message: `What is the name of the new department?`
        }])
        .then(function (response) {
            newDepartmentName = response.department;
            departmentArray.push(newDepartmentName);
            db.query('INSERT INTO tracker.department (dep_name) VALUES ("' + newDepartmentName + '")', function (error, data) {
                if (error) throw error;
                viewDepartments();
            })
        })
};

function addRole() {
    inquirer.prompt([
        {
            type: `input`,
            name: `title`,
            message: `What is the new role called?`
        },
        {
            type: `input`,
            name: `salary`,
            message: `What is the salary for the new role?`
        },
        {
            type: `list`,
            name: `department`,
            message: `What department is the new role in?`,
            choices: departmentArray
        }
    ])
        .then(function (response) {
            newRoleTitle = response.title;
            roleArray.push(newRoleTitle);
            for (i = 0; i <= departmentArray.length; i++) {
                if (response.department == departmentArray[i]) {
                    dep_id = (i + 1);
                    db.query('INSERT INTO tracker.role (title, salary, department_id) VALUES ("' + response.title + '", ' + response.salary + ', ' + dep_id + ')', function (error, data) {
                        if (error) throw error;
                        viewRoles();
                    });
                }
            };
        });
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
            type: `list`,
            name: `role`,
            message: `What is the employee's role?`,
            choices: roleArray
        },
        {
            type: `list`,
            name: `manager`,
            message: `Who is the employee's manager?`,
            choices: managerArray
        }
    ])
        .then(function (response) {
            for (i = 0; i <= roleArray.length; i++) {
                if (response.role == roleArray[i]) {
                    role_id = (i + 1);
                    if (response.manager == managerArray[i]) {
                        manager_id = (i + 1);
                        db.query('INSERT INTO tracker.employee (first_name, last_name, role_id, manager_id) VALUES ("' + response.first + '", ' + response.last + ', ' + role_id + ', ' + manager_id + ')', function (error, data) {
                            if (error) throw error;
                            viewEmployees();
                        });
                    }
                }
            };
        });
};

function updateEmployee() {
    inquirer.prompt([
        {
            type: `input`,
            name: `first`,
            message: `What is the employee's first name whose role you want to update?`
        },
        {
            type: `input`,
            name: `last`,
            message: `What is the employee's last name whose role you want to update?`
        },
        {
            type: `list`,
            name: `role`,
            message: `What new role do you want the employee to have?`,
            choices: roleArray
        }
    ])
        .then(function (response) {
            for (i = 0; i <= roleArray.length; i++) {
                if (response.role == roleArray[i]) {
                    role_id = (i + 1);
                    db.query('UPDATE employee SET role_id = ' + role_id + ' WHERE first_name = "' + response.first + '" AND "' + response.last + '"', function (error, data) {
                        if (error) throw error;
                        viewEmployees();
                    });
                }
            }
        });
};

// function to quit and return to main command line
function quit() {
    console.log('exiting program')
    prompt.ui.close()
    // This is just an error but DOES close the program
};