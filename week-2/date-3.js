/*Assignment 3: Age Calculator (Intermediate)
-------------------------------------------
Input:*/
let dob = "2000-05-15"
let date=new Date(dob)
let today=new Date()
let age=today.getFullYear()-date.getFullYear()
if(today.getMonth()<=date.getMonth()){
    age=age-1
    console.log(age)
}
else{
console.log(age)
}
//Tasks:
//        1. Calculate exact age in years