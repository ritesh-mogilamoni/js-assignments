const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};
let total=0
let c=0
let max=marks.maths
let maxsub

for(let i in marks){
  total=total+marks[i]
  c++
  if(marks[i]>max){
    max=marks[i]
    maxsub=i
  }
}
console.log("Total:",total)
console.log("Avg:", total/c)
console.log("Highest scoring subject:", maxsub)
marks.computer=80

/*Tasks:
    1. Calculate total marks
    2. Calculate average marks
    3. Find the highest scoring subject
    4. Add a new subject computer: 90
*/