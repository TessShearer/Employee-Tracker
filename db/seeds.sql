INSERT INTO tracker.department (dep_name)
VALUES
('Grounds'),
('Janitorial'),
('IT'),
('Management');

INSERT INTO tracker.role (title, salary, department_id)
VALUES
('leafblower', 29839, 1),
('gardener', 34336, 1),
('Snowplow', 51436, 1),
('Trash Collector', 46730, 2),
('Janitor', 21345, 2),
('On and Off Again Guy', 60554, 3),
('Systems Administrator', 91873, 3),
('Grounds Manager', 48566, 4),
('Janitorial Manager', 48565, 4),
('IT Manager', 140587, 4),
('Company Head', 230871, 4);

INSERT INTO tracker.employee (first_name, last_name, role_id, manager_id)
VALUES
('Abby', 'Anderson', 11, null),
('Ben', 'Baker', 8, 1),
('Carol', 'Coleman', 9, 1),
('David', 'Dentin', 10, 1),
('Eddie', 'Edmington', 1, 2),
('Freddie', 'Fish', 1, 2),
('Gary', 'Gardner', 2, 2),
('Harry', 'Hoffman', 2, 2),
('Isabelle', 'Irving', 3, 2),
('Joshua', 'Jacobs', 3, 2),
('Kelsey', 'King', 4, 3),
('Liam', 'Lewis', 5, 3),
('Manny', 'Michaels', 5, 3),
('Nick', 'Nickelson', 5, 3),
('Ola', 'Olson', 6, 4),
('Pamela', 'Powell', 6, 4),
('Quinton', 'Quiggle', 6, 4),
('Rachel', 'Reese', 6, 4),
('Sam', 'Sanders', 7, 4),
('Tyler', 'Thompson', 7, 4);
