/*ASSIGNMENT 2:
-------------
Student Performance Dashboard

You are working on a college result analysis system.

Test Data:*/

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
]

console.log(students.filter(student=>student.marks>=40))

let studentGrade=students.map(function(student){
    let grade="D"
    if(student.marks>=90)
        grade="A"
    else if(student.marks>=75)
        grade="B"
    else if(student.marks>=60)
        grade="C"

    student.grade=grade
    return student
});

console.log(studentGrade)

let totalMarks=students.reduce((sum,student)=>sum+student.marks,0)
let averageMarks=totalMarks/students.length
console.log("Average Marks:",averageMarks)

console.log(students.find(student=>student.marks===92))

console.log(students.findIndex(student=>student.name==="Kiran"))



/*Tasks:
    1. filter() students who passed (marks ≥ 40)
    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D

   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran"*/
