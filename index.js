const inquirer = require('inquirer');
const fs = require('fs');
const cTable = require('console.table');
const mysql = require('mysql2');
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'mysqlauthstring',
      database: 'company'
    },
  );

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
    /*
    console.table();
    */
    const sql = 'SELECT * FROM departments';
    db.query(sql, (err, rows) => {
       return json({
          message: 'success',
          data: rows
        });
      });
}

const rolesView = () => {
    console.log('test')
}

const employeesView = () => {
    console.log('test')
}

const departmentPost = () => {
    console.log('test')
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

menuPrompt();