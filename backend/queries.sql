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
    newPassword TEXT,
    subject_ids JSONB DEFAULT '{}'::JSONB
);

 CREATE TABLE subjects (
    subject_id SERIAL PRIMARY KEY,
    subject_name text,
    course_code text,
    department_id int ,
    stars int DEFAULT 0,
    comments int DEFAULT 0,
    FOREIGN KEY (department_id) REFERENCES departments(department_id)
);
CREATE TABLE reviews (
    review_id SERIAL PRIMARY KEY,
    details TEXT,
    stars INT,
    review_date DATE,
    subject_id INT,
    user_id INT,
    isadminverified BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (subject_id) REFERENCES subjects(subject_id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);


ALTER TABLE users ADD COLUMN subject_ids JSONB DEFAULT '{}'::JSONB;
email ko unique
alter table karke add the oe array