/*Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.

Test data:
*/
const courses = ["javascript", "react", "node", "mongodb", "express"];

console.log(courses.filter(course=>course.length>5))

console.log(courses.map(course=>course.toUpperCase()))

console.log(courses.find(course=>course==='react'))

console.log(courses.findIndex(course=>course==='node'))
/*
Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"*/