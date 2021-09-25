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
    // no entry validation required, not possible to advance to next step without valid input
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
        const sql = `INSERT INTO departments (name)
        VALUES (?)`;
        const params = [answer];
        db.query(sql, params, (err, result) => {
            if (err) {
            res.status(400).json({ error: err.message });
            return;
            }
            res.json({
              message: 'success',
              data: body
            });
          });
          // return to main menu
          }).then(menuPrompt)
}

const rolePost = () => {
    console.log('test')
}

const employeePost = () => {
    console.log('test')
}

const employeePut = () => {
    console.log('test')
}

menuPrompt()