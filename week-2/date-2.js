/*Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
--------------------------------------------------------------------

 Given:*/
      let enrollmentDeadline = new Date("2026-01-20");
    //console.log(new Date())
      if(enrollmentDeadline>=Date.now()){
        console.log("Enrollment Open")

      }
      else{
        console.log("Enrollment Closed")
      }

let year = 2026;
let month=1;
let day=30;

let inputDate=new Date(year,month,day)


if(inputDate.getFullYear()===year &&
  inputDate.getMonth()===month &&
  inputDate.getDate()===day) {
    console.log("Valid")
    } 
else {
  console.log("Invalid")
}


      

/*Tasks:
  1.Check if:
      * Today is before deadline → "Enrollment Open"
      * Today is after deadline → "Enrollment Closed"

  2. Validate user input date:
      * Input: "2026-02-30"
      * Detect whether the date is valid or invalid*/
