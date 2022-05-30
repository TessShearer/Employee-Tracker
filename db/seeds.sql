INSERT INTO department (id, dep_name)
VALUES
(1, 'Grounds'),
(2, 'Janitorial'),
(3, 'IT'),
(4, 'Management');

INSERT INTO role (id, title, salary, department_id)
VALUES
(1, 'leafblower', 29839, 1),
(2, 'gardener', 34336, 1),
(3, 'Snowplow', 51436, 1),
(4, 'Trash Collector', 46730, 2),
(5, 'Janitor', 21345, 2),
(6, 'On and Off Again Guy', 60554, 3),
(7, 'Systems Administrator', 91873, 3),
(8, 'Grounds Manager', 48566, 4),
(9, 'Janitorial Manager', 48565, 4),
(10, 'IT Manager', 140587, 4),
(11, 'Company Head', 230871, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
(1, 'Abby', 'Anderson', 1, 8),
(2, 'Ben', 'Baker', 2, 8),
(3, 'Carol', 'Coleman', 2, 8),
(4, 'David', 'Dentin', 2, 8),
(5, 'Eddie', 'Edmington', 3, 8),
(6, 'Freddie', 'Fish', 3, 8),
(7, 'Gary', 'Gardner', 4, 9),
(8, 'Harry', 'Hoffman', 5, 9),
(9, 'Isabelle', 'Irving', 5, 9),
(10, 'Joshua', 'Jacobs', 5, 9),
(11, 'Kelsey', 'King', 6, 10),
(12, 'Liam', 'Lewis', 6, 10),
(13, 'Manny', 'Michaels', 6, 10),
(14, 'Nick', 'Nickelson', 6, 10),
(15, 'Ola', 'Olson', 7, 10),
(16, 'Pamela', 'Powell', 7, 10),
(17, 'Quinton', 'Quiggle', 8),
(18, 'Rachel', 'Reese', 9),
(19, 'Sam', 'Sanders', 10),
(20, 'Tyler', 'Thompson', 11);
