 /*HANDS-ON 1: Smart Login Status Engine
----------------------------------------

Initial data:*/
let isLoggedIn=true;
let isProfileComplete=false


if(isLoggedIn==false){
    let message="Please Login"
    console.log(message)
}

else if(isLoggedIn==true && isProfileComplete==false){
    let message="Complete your profile"
    console.log(message)
}

else if(isLoggedIn==true && isProfileComplete==true){
    let message="Welcome back"
    console.log(message)
}


/*Tasks:
   1. If user is not logged in → show "Please login"
   2. If logged in but profile incomplete → show "Complete your profile"
   3. If logged in and profile complete → show "Welcome back!"
   4. Store the result in message
   5. Print the message*/





/*HANDS-ON 2: Course Price Tag Labeler
------------------------------------
Initial data:*/

let price = 1299;
function courseDecider(price){
if(price<500){
    let courseTag="Budget course"
    console.log(courseTag)
}

else if(price>=500 && price<=1000){
    let courseTag="Standard course"
    console.log(courseTag)
}

if(price>1000){
    let courseTag="Premium course"
    console.log(courseTag)
}}

courseDecider(price)

/*Tasks:
   1. If price < 500 → "Budget Course"
   2. If price between 500–1000 → "Standard Course"
   3. If price > 1000 → "Premium Course"
   4. Store label in courseTag
   5. Print the label*/



/*HANDS-ON 3: Enrollment Eligibility Checker
------------------------------------------
Initial data:*/

    let hasPaid = true;
    let hasCompletedBasics = false;
    let enrollMessage=hasPaid===true&&hasCompletedBasics===true?"Enroll now":"Complete Requirements"
    console.log(enrollMessage)
/*Tasks:
   1. If both conditions are true → "Enroll Now"
   2. Otherwise → "Complete Requirements"
   3. Use ternary operator
   4. Store result in enrollMessage
   5. Print message*/