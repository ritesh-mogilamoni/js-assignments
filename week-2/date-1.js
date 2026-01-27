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

let date=new Date()
console.log(date.getFullYear())

console.log(date.getMonth()+1)
console.log(date)
console.log(date.getDay())
console.log(date.getHours(),date.getMinutes(),date.getSeconds())
console.log(date)
