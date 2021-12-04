INSERT INTO department(dept_name)
VALUES("Sales"), ("Engineering"), ("Finance"), ("Legal");

INSERT INTO roles(title, salary, dept_id)
VALUES ("Sales Lead", 100000, 1), 
       ("Lead Engineer", 150000, 2), 
       ("Accountant", 125000, 3),
       ("Legal Team Lead", 250000, 4), 
       ("Salesperson", 80000, 1)
       ("Software Engineer", 120000, 2),
       ("Account Manager", 160000, 3), 
       ("Lawyer", 190000, 4);

INSERT INTO employees(employee_name, role_id, manager_id)
Values 
       ("John Doe", 1, NULL)
       ("Ashley Rodriguez", 3, NULL),
       ("Kunal Singh", 5, NULL),
       ("Sarah Lourd", 7, NULL),
       ("Mike Chan", 2, 1),
       ("Kevin Tupik", 4, 3),
       ("Malia Brown", 6, 5),
       ("Tom Allen", 8, 7);