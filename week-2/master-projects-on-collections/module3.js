import {cart,courses} from '../data.js'

//   -> Merge cart with courses to get full course info
const courseMap={};

for (let course of courses) {
  courseMap[course.id]=course;
}

let mergedCart=[];

for (let item of cart) {
    let course=courseMap[item.courseId];
    mergedCart.push({courseID:course.id,title:course.title,price:course.price,qty:item.qty});
}
console.log(mergedCart);


//   -> Calculate total cart amount

let totalCartAmount=mergedCart.reduce((sum,course)=>(sum+(course.price*course.qty)),0)
console.log(totalCartAmount)

//   -> Increase quantity of a course (immutably)
let copyCart=structuredClone(cart)
copyCart[0].qty=2
console.log(copyCart)

//   -> Remove a course from cart
delete(copyCart[1])
console.log(copyCart)

//   -> Check if all cart items are paid courses
let count=0
for(let i of mergedCart){
    if(i.price){
        continue
    }
    else{
        count=1
    }
}
if(count===0){
    console.log("Are Paid courses")
}
else{
    console.log("Are not paid courses")
}