/*Assignment 1: Date Creation & Extraction (Beginner)
---------------------------------------------------
Tasks:
       1. Create a Date object for current date & time.
       2. Extract and display:
                    * Year
                    * Month (human readable)
                    * Date
                    * Day of week
                    * Hours, minutes, seconds

      3. Display the date in this format:
                    DD-MM-YYYY HH:mm:ss*/

let date=new Date()  //Create a Date object for current date & time.
console.log("Year:",date.getFullYear())   //Extract and display Year
console.log("Month:",date.getMonth()+1)   //Extract and display Month
console.log("Date:",date.getDate())       //Extract and display Date
console.log("Day:",date.getDay()+1)       //Extract and display Day of week
console.log("Hours:",date.getHours(),"Minutes:",date.getMinutes(),"Seconds:",date.getSeconds())   //Extract and display Hours, minutes, seconds

//Display the date in this format:DD-MM-YYYY HH:mm:ss
console.log("DD-MM-YYYY HH:mm:ss :",date.getDate(),"-",date.getMonth()+1,"-",date.getFullYear()," ",date.getHours(),":",date.getMinutes(),":",date.getSeconds())
