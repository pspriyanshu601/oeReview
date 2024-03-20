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
    subject_ids JSONB DEFAULT '{}' ::JSONB
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
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
ALTER TABLE reviews 
ALTER COLUMN review_date SET DEFAULT CURRENT_DATE;

CREATE TABLE user_subjects (
    user_subjects_id SERIAL PRIMARY KEY,
    user_id INT,
    subject_ids JSONB NOT NULL CHECK (jsonb_array_length(subject_ids) >= 1 AND jsonb_array_length(subject_ids) <= 3),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
