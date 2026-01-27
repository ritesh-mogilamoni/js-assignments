const marks = [78, 92, 35, 88, 40, 67];

console.log(marks.filter(mark=>mark>=40))
console.log(marks.map(mark=>mark+5))
console.log(marks.reduce((high,mark)=>(high>mark?high:mark)))

console.log(marks.find(mark=>mark<40))
console.log(marks.findIndex(mark=>mark===92))