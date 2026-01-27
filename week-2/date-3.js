/*Assignment 3: Age Calculator (Intermediate)
-------------------------------------------
Input:*/
let dob = "2000-05-15"
let date=new Date(dob)  //Creatinng date obj for dob 
let today=new Date()
let age=today.getFullYear()-date.getFullYear()  //Calculating age
if(today.getMonth()<date.getMonth()||
    (today.getMonth()===date.getMonth()&&today.getDate()<date.getDate())){  //Checking birth month and date to calculate proper age
        age=age-1
        console.log(age)
}
else{
console.log(age)
}
//Tasks:
//        1. Calculate exact age in years