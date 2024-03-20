CREATE TABLE departments (
	department_id serial primary key,
	department_name text
);

INSERT INTO departments 
(department_name) 
VALUES ('Civil Engineering'),
 ('Computer Science And Engineering'),
 ('Electrical Engineering'),
 ('Electronics Engineering'),
 ('Environmental Science And Engineering'),
 ('Fuelminerals And Metallurgical Engineering'),
 ('Humanities And Social Sciences'),
 ('Management Studies And Industrial Engineering'),
 ('Mathematics And Computing'),
 ('Mechanical Engineering'),
 ('Mining Engineering'),
 ('Petroleum Engineering'),
 ('Physics'),
 ('Applied Geology'),
 ('Applied Geophysics'),
 ('Chemical Engineering'),
 ('Chemistry And Chemical Biology');

 CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email TEXT,
    password TEXT,
    otp TEXT,
    verified BOOLEAN,
    username TEXT,
    isadmin BOOLEAN DEFAULT FALSE,
    new_password TEXT
);