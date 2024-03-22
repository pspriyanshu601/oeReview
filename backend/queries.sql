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


 CREATE TABLE subjects (
    subject_id SERIAL PRIMARY KEY,
    subject_name text,
    course_code text,
    department_id int ,
    stars int DEFAULT 0,
    attendance_stars INT DEFAULT 0,
    grades_stars INT DEFAULT 0,
    quality_stars INT DEFAULT 0,
    comments int DEFAULT 0,
    FOREIGN KEY (department_id) REFERENCES departments(department_id)
);

 CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email TEXT,
    password TEXT,
    otp TEXT,
    verified BOOLEAN,
    username TEXT,
    isadmin BOOLEAN DEFAULT FALSE,
    newPassword TEXT,
    no_of_subjects INT DEFAULT 0,
    subject_ids JSONB DEFAULT '{}' ::JSONB
);

CREATE TABLE reviews (
    review_id SERIAL PRIMARY KEY,
    details TEXT,
    stars INT,
    attendance_stars INT ,
    grades_stars INT,
    quality_stars INT,
    review_date DATE,
    subject_id INT,
    user_id INT,
    isadminverified BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (subject_id) REFERENCES subjects(subject_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
ALTER TABLE reviews 
ALTER COLUMN review_date SET DEFAULT CURRENT_DATE;
