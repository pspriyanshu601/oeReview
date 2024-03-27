
The API is hosted at [https://oe-review-backend-new.vercel.app/](https://oe-review-backend-new.vercel.app/)


# OE Review API Documantation

# Get Endpoints

## Get Username

Example Request

**GET** `https://oe-review-backend.vercel.app/user/username`

Example Response

```
{
    "success": true,
    "message": "Name fetched successfully",
    "name": "PriyanshuSingh"
}
```



## Get all department names

**GET** `https://oe-review-backend.vercel.app/user/allDepartments`

Example Response

``` 
{
    "success": true,
    "message": "Fetched departments successfully",
    "departments": [
        {
            "department_id": 1,
            "department_name": "Civil Engineering"
        },
        {
            "department_id": 2,
            "department_name": "Computer Science And Engineering"
        }
    ]
}
```


## Get all subjects names


**GET** `https://oe-review-backend.vercel.app/user/allSubjects`

Example Response

```
{
    "success": true,
    "message": "Fetched all subjects successfully",
    "departments": [
        {
            "subject_id": 1,
            "subject_name": "Introduction to Civil Engineering",
            "course_code": "CE101",
            "department_id": 1,
            "stars": 4,
            "comments": 10,
            "attendance_stars": 3,
            "grades_stars": 5,
            "quality_stars": 4
        }
    }
]
```

## Get all verified reviews of a particular course


**GET** `https://oe-review-backend.vercel.app/user/allVerifiedReviews/courseCode/:courseCode`

*Expected Course_code : First three characters [A-Z] next three [100-599]*

Example Response

```
{
    "success": true,
    "message": "Fetched reviews successfully",
    "subjectReviews": [
        {
            "details": "Good subject but bad grades",
            "stars": 4,
            "review_date": "2024-03-20T18:30:00.000Z",
            "attendance_stars": 3,
            "grades_stars": 3,
            "quality_stars": 5
        }
    ]
}
```

## Get all subjects in sorted manner in paged


**GET** `https://oe-review-backend.vercel.app/user//weightedSubjects/page/:page`

Example Response

```
{
    "success": true,
    "message": "Fetched subjects successfully",
    "reviews": [
        {
            "subject_name": "Structural Engineering",
            "course_code": "CVE201",
            "average_rating": "1.75",
            "department_name": "Civil Engineering",
            "comments": 12
        },
        {
            "subject_name": "Transportation Engineering",
            "course_code": "CE104",
            "average_rating": "0.50",
            "department_name": "Civil Engineering",
            "comments": 6
        },
        {
            "subject_name": "Control Systems",
            "course_code": "EE104",
            "average_rating": "0.44",
            "department_name": "Electrical Engineering",
            "comments": 9
        }
    ]
}
```

## Get all subjects in sorted manner a/c to filter in paged


**GET** `https://oe-review-backend.vercel.app/user/weightedSubjects/filter/:filter/page/:page`

*Allowed Filters:  {"attendance","grades","quality"}*

Example Response

```
{
    "success": true,
    "message": "Fetched subjects successfully",
    "reviews": [
        {
            "subject_name": "Structural Engineering",
            "course_code": "CVE201",
            "average_attendance_rating": "1.33",
            "department_name": "Civil Engineering",
            "comments": 12
        },
        {
            "subject_name": "Transportation Engineering",
            "course_code": "CE104",
            "average_attendance_rating": "0.67",
            "department_name": "Civil Engineering",
            "comments": 6
        }
    ]
}
```

## Get all subjects of a particular department


**GET** `https://oe-review-backend.vercel.app/user/allSubjects/departmentId/:departmentId`

*Expected department ID from 1 to 17 and INTEGER*


Example Response

```
{
    "success": true,
    "message": "Fetched department subjects successfully",
    "subjects": [
        {
            "subject_id": 1,
            "subject_name": "Introduction to Civil Engineering",
            "course_code": "CE101",
            "department_id": 1,
            "stars": 4,
            "comments": 10,
            "attendance_stars": 3,
            "grades_stars": 5,
            "quality_stars": 4
        }
    ]
}

```

## Post a review

**POST** `https://oe-review-backend.vercel.app/submitReview/courseCode/:courseCode`

*Expected Course_code : First three characters [A-Z] next three [100-599]*

Example request 

```
{
    "details":"Accha Subject",
    "stars":4,
    "attandance_stars":3,
    "quality_stars":4,
    "grade_stars":2
}
```
Example Response

```
{
    "success": true,
    "message": "The review will be added after admin verification"
}
OR 
{
    "success": false,
    "message": "Admin verification pending for the review"
}
OR
{
    success: false,
    message: "You have already added reviews"
}
```

## Check if user has added subjects or not 
**GET** `https://oe-review-backend.vercel.app/user/hasAddedSubjects`


Example Response

```
{
    "success": false,
    "hasAddedSubjects": false
}
OR
{
    "success": true,
    "hasAddedSubjects": true
}

```

## Adding user subjects

**POST** `https://oe-review-backend.vercel.app/user/userSubjects`


Example Request 
```
{
    "noOfSubjects":3,
    "subject1Id":1,
    "subject2Id":2,
    "subject3Id":24
}
```
Example Response

```
{
    "success": true,
    "message": "Added Subjects Successfully"
}
OR 
{
    "success": false,
    "message": "Already added subjects wait for next sem to add subjects"
}
```

## Get all user Subjects 

**GET**`https://oe-review-backend.vercel.app/user/userSubjects`

Example Response
```
{
    "success": true,
    "message": "Fetched subjects successfully",
    "userSubjects": [
        {
            "user_id": 9,
            "subject_name": "Introduction to Civil Engineering",
            "subject_id": 1,
            "course_code": "CE101"
        },
        {
            "user_id": 9,
            "subject_name": "Structural Engineering",
            "subject_id": 2,
            "course_code": "CVE201"
        },
        {
            "user_id": 9,
            "subject_name": "VLSI Design",
            "subject_id": 24,
            "course_code": "ECE106"
        }
    ]
}
```

## Get user all Data

**GET**`https://oe-review-backend.vercel.app/user/userData`

Example Response
```
{
    "success": true,
    "message": "Fetched user data successfully",
    "userData": {
        "email": "21je0715@iitism.ac.in",
        "username": "PriyanshuSingh",
        "isadmin": true,
        "no_of_subjects": 3
    },
    "userSubjects": [
        {
            "subject_id": 445,
            "subject_name": " Stratigraphy",
            "course_code": "GLD521",
            "department_name": "Applied Geology"
        },
        {
            "subject_id": 446,
            "subject_name": " Atmosphere, Ocean and Climate Dynamics",
            "course_code": "GLO523",
            "department_name": "Applied Geology"
        }
    ],
    "userReviews": [
        {
            "details": "jsjdsfd",
            "stars": 4,
            "attendance_stars": 4,
            "grades_stars": 4,
            "quality_stars": 4,
            "review_date": "2024-03-26T18:30:00.000Z",
            "subject_id": 445,
            "isadminverified": false,
            "subject_name": " Stratigraphy",
            "course_code": "GLD521",
            "department_name": "Applied Geology"
        },
        {
            "details": "sfddsd",
            "stars": 4,
            "attendance_stars": 3,
            "grades_stars": 4,
            "quality_stars": 5,
            "review_date": "2024-03-26T18:30:00.000Z",
            "subject_id": 446,
            "isadminverified": false,
            "subject_name": " Atmosphere, Ocean and Climate Dynamics",
            "course_code": "GLO523",
            "department_name": "Applied Geology"
        }
    ]
}
```

## User deletes a Review 

**DELETE**`https://oe-review-backend.vercel.app/user/deleteReview/reviewId/:reviewId`

Example Response
```
{
    success: true,
    message: "Review Deleted successfully",
}
OR
{
    success: false,
    message: "Review does not exist",
}
```

## User updates a review 

**PATCH**`https://oe-review-backend.vercel.app/user/updateReview/reviewId/:reviewId`

Example Request
```
{
    "details":"bekar subject",
    "attendance_stars":4,
    "grades_stars":3,
    "quality_stars":2,
    "stars":1
}
```

Example Response
```
{
    "success": true,
    "message": "The review will be updated after admin verification"
}
```

---









