import {courses} from "./data.js"

//Get published courses
let publishedCourses=courses.filter(course=>course.published===true)
console.log(publishedCourses)

//Sort courses by price (high → low)
let sortedCourse=[...courses].sort((a,b)=>b.price-a.price);
console.log(sortedCourse)

//Extract { title, price } only
let titlePrice=courses.map(course=>({title:course.title, price:course.price}))
console.log(titlePrice)

//Calculate total value of published courses
let totalValue=courses.reduce((sum,course)=>sum+=course.price,0)
console.log("Total Value is:",totalValue)

//Add a new course immutably
let copyCourses=structuredClone(courses)
copyCourses.push({ id: 104, title: "Angular", price: 1345, published: true })

console.log(copyCourses)