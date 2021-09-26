const inquirer = require('inquirer');
const fs = require('fs');
const cTable = require('console.table');
const mysql = require('mysql2');
const db = require('./db/connection');

const menuPrompt = () => {
    inquirer.prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      name: 'menu',
      choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update employee role'],
    }
]).then((answer) => {
    if (answer.menu === 'view all departments') {
    departmentView(answer)
    }
    if (answer.menu === 'view all roles') {
    rolesView(answer)
    }
    if (answer.menu === 'view all employees') {
    employeesView(answer)
    }
    if (answer.menu === 'add a department') {
    departmentPost(answer)
    }
    if (answer.menu === 'add a role') {
    rolePost(answer)
    }
    if (answer.menu === 'add an employee') {
    employeePost(answer)
    }
    if (answer.menu === 'update employee role') {
    employeePut(answer)
    }
})
}

const departmentView = () => {
    const sql = 'SELECT * FROM departments';
    db.query(sql, (err, rows) => {
      if(err){console.error(err)}
      if(rows){console.table(rows)}
    });
    menuPrompt();
}

const rolesView = () => {
    const sql = 'SELECT * FROM roles';
    db.query(sql, (err, rows) => {
      if(err){console.error(err)}
      if(rows){console.table(rows)}
    });
    menuPrompt();
}

const employeesView = () => {
    const sql = 'SELECT * FROM employees';
    db.query(sql, (err, rows) => {
      if(err){console.error(err)}
      if(rows){console.table(rows)}
    });
    menuPrompt();
}

const departmentPost = () => {
    inquirer.prompt([
        {
          type: 'input',
          name: 'departmentName',
          message: 'What is the name of the department you would like to add?'
        }
    ]).then((answer) => {
        const sql = `INSERT INTO departments (name) VALUES ('${answer.departmentName}')`;
        db.query(sql);
        }).then(menuPrompt)
}

const rolePost = () => {
    inquirer.prompt([
        {
          type: 'input',
          name: 'roleName',
          message: 'What is the title of the role you would like to add?'
        },
        {
            type: 'input',
            name: 'roleSalary',
            message: 'What is the salary for this role?'
          }
    ]).then((answer) => {
        const sql = `INSERT INTO roles (description, salary) VALUES ('${answer.roleName}', '${answer.roleSalary}')`;
        db.query(sql);
        }).then(menuPrompt)
}

const employeePost = () => {
    inquirer.prompt([
        {
          type: 'input',
          name: 'employeeFirstName',
          message: 'What is their first name?'
        },
        {
          type: 'input',
          name: 'employeeLastName',
          message: 'What is their last name?'
        },
        {
          type: 'input',
          name: 'employeeEmail',
          message: 'What is their email?'
        }
    ]).then((answer) => {
        const sql = `INSERT INTO employees (first_name, last_name, email) VALUES ('${answer.employeeFirstName}', '${answer.employeeLastName}', '${answer.employeeEmail}')`;
        db.query(sql)
    }).then(menuPrompt)
}

const employeePut = () => {
    console.log("EMPLOYEES")
    const sql1 = 'SELECT * FROM employees';
    db.query(sql1, (err, rows) => {
      if(err){console.error(err)}
      if(rows){console.table(rows)}
    console.log("ROLES");
    const sql2 = 'SELECT * FROM roles';
    db.query(sql2, (err, rows) => {
      if(err){console.error(err)}
      if(rows){console.table(rows)}
    inquirer.prompt([
        {
          type: 'input',
          message: 'Which employee ID number would you like to update?',
          name: 'employeeId'
        },
        {
          type: 'input',
          message: 'What is their new role?',
          name: 'newRole'
        }
    ]).then((answer) => {
        const sql = `UPDATE employees SET roles = ${answer.newRole} WHERE id = ${answer.employeeId}`;
        db.query(sql);
        })
    })
})
}

menuPrompt()