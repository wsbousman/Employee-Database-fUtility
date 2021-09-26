USE company;

INSERT INTO departments (name)
VALUES
('Department of Bureaucracy'),
('Research and Development'),
('Maintenance'),
('Public Relations'),
('Marketing');

INSERT INTO roles (description, salary)
VALUES
('Chief Redundancy Officer', '$150,000/year'),
('Vice President of Redundancy', '$120,000/year'),
('Assistant to the Vice President of Redundancy', '$90,000/year'),
('Janitor', '$25,000/year'),
('Social Media Curator', '$60,000/year'),
('Silver Tongued Devil', '$85,000/year');

INSERT INTO employees (first_name, last_name, email, role_id)
VALUES
('Kris', 'Henderson', 'CHenderson86@hotmail.com', 1),
('Joey', 'DeTomasso', 'BigJoe99@aol.net', 2),
('Keenan', 'Duarte', 'Keekee@gmail.com', 3),
('Jessica', 'Hartford', 'JHart44@gmail.com', 5),
('Michael', 'Krieger', 'MikeKrieger102@yahoo.com', 4),
('Louis', 'Ryan', 'LLRyanCo@Mailchimp.net', 3),
('Elizabeth', 'Depailler', 'EDepailler11@gmail.com', 6);