
DROP DATABASE IF EXISTS employeetrack;

CREATE DATABASE employeetrack;

USE employeetrack;

CREATE TABLE department (

    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    dept_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (

    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    title VARCHAR(30) NOT NULL, 
    salary DECIMAL,
    dept_id INT NOT NULL,
    FOREIGN KEY (dept_id)
    REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employee (

    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    employee_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id)
    REFERENCES roles(id) ON DELETE CASCADE
    FOREIGN KEY (manager_id)
    REFERENCES employee(id) ON DELETE CASCADE
);

