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
('Abby', 'Anderson', 1, 8),
('Ben', 'Baker', 2, 8),
('Carol', 'Coleman', 2, 8),
('David', 'Dentin', 2, 8),
('Eddie', 'Edmington', 3, 8),
('Freddie', 'Fish', 3, 8),
('Gary', 'Gardner', 4, 9),
('Harry', 'Hoffman', 5, 9),
('Isabelle', 'Irving', 5, 9),
('Joshua', 'Jacobs', 5, 9),
('Kelsey', 'King', 6, 10),
('Liam', 'Lewis', 6, 10),
('Manny', 'Michaels', 6, 10),
('Nick', 'Nickelson', 6, 10),
('Ola', 'Olson', 7, 10),
('Pamela', 'Powell', 7, 10),
('Quinton', 'Quiggle', 8, null),
('Rachel', 'Reese', 9, null),
('Sam', 'Sanders', 10, null),
('Tyler', 'Thompson', 11, null);
