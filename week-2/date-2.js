/*Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
--------------------------------------------------------------------

 Given:*/
let enrollmentDeadline = new Date("2026-02-20");

if(enrollmentDeadline>=new Date()){   //Checking if today is before deadline 
  console.log("Enrollment Open")    //if today is before deadline, "Enrollment Open" is printed
}
else{
  console.log("Enrollment Closed")  //if today is after deadline, "Enrollment Closed" is printed
}

let input="2026-02-30"
let splittedDate=input.split("-")   // Split input string

let year=Number(splittedDate[0])    //String is converted to number
let month=Number(splittedDate[1])   //String is converted to number
let day=Number(splittedDate[2])     //String is converted to number

let date=new Date(input)

// Check if Date is valid or invalid
if(
  date.getFullYear()===year&&date.getMonth()+1===month&&date.getDate()===day){
  console.log("Date is Valid")}
else{
  console.log("Date is Invalid")
}


/*Tasks:
  1.Check if:
      * Today is before deadline → "Enrollment Open"
      * Today is after deadline → "Enrollment Closed"

  2. Validate user input date:
      * Input: "2026-02-30"
      * Detect whether the date is valid or invalid*/
