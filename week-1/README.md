# JavaScript Assignments — Week 1

## 📘 About This Repository

This repository contains beginner-to-intermediate JavaScript practice programs focused on:

* Array methods
* Objects
* Conditional statements
* Operators
* Functions
* Arrow functions
* Real-world problem-solving logic

The programs simulate practical scenarios like:

* Shopping carts
* Student grading systems
* Employee salary calculations
* Movie ratings
* Banking transactions
* Temperature analysis
* Login systems
* Billing systems

---

# 📚 Concepts Covered

---

# 1️⃣ Arrays in JavaScript

Arrays store multiple values in a single variable.

## Syntax

```js
const arr = [1, 2, 3];
```

## Examples Covered

```js
const marks = [78, 92, 35, 88];
const temperatures = [32, 35, 28];
```

## Concepts Learned

* Creating arrays
* Accessing values
* Iterating through arrays
* Performing calculations

---

# 2️⃣ Arrays of Objects

Used to store structured data.

## Syntax

```js
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" }
];
```

## Examples Covered

* Cart items
* Students
* Employees
* Movies
* Transactions

---

# 3️⃣ Arrow Functions

Short syntax for writing functions.

## Syntax

```js
const add = (a, b) => a + b;
```

## Examples Covered

```js
cart.filter(element => element.inStock == true)

marks.map(mark => mark + 5)
```

## Concepts Learned

* Concise function writing
* Callback functions
* Functional programming basics

---

# 4️⃣ `filter()` Method

Used to return elements matching a condition.

## Syntax

```js
array.filter(callbackFunction)
```

## Examples Covered

### Filter in-stock products

```js
cart.filter(element => element.inStock == true)
```

### Filter passed students

```js
students.filter(student => student.marks >= 40)
```

### Filter Sci-Fi movies

```js
movies.filter(movie => movie.genre === "Sci-Fi")
```

## Concepts Learned

* Conditional filtering
* Returning subsets of arrays
* Boolean expressions

---

# 5️⃣ `map()` Method

Used to transform array elements.

## Syntax

```js
array.map(callbackFunction)
```

## Examples Covered

### Get product names

```js
cart.map(element => element.name)
```

### Convert temperature to Fahrenheit

```js
temperatures.map(temp => (temp * 1.8) + 32)
```

### Add grades to students

```js
students.map(student => {
   student.grade = "A";
   return student;
})
```

## Concepts Learned

* Data transformation
* Returning modified arrays
* Updating object properties

---

# 6️⃣ `reduce()` Method

Used to reduce array values into a single output.

## Syntax

```js
array.reduce((accumulator, currentValue) => {
   return result;
}, initialValue)
```

## Examples Covered

### Calculate cart total

```js
cart.reduce((acc, element) =>
   acc + (element.price * element.quantity), 0)
```

### Find total marks

```js
students.reduce((sum, student) =>
   sum + student.marks, 0)
```

### Banking balance calculation

```js
transactions.reduce((bal, t) => {
   if(t.type === "credit")
      return bal + t.amount;
   else
      return bal - t.amount;
}, 0)
```

## Concepts Learned

* Accumulators
* Aggregation logic
* Totals, averages, balances

---

# 7️⃣ `find()` Method

Returns the first matching element.

## Syntax

```js
array.find(callbackFunction)
```

## Examples Covered

```js
students.find(student => student.marks === 92)

movies.find(movie => movie.title === "Joker")
```

## Concepts Learned

* Searching arrays
* Retrieving single objects

---

# 8️⃣ `findIndex()` Method

Returns the index of the matching element.

## Syntax

```js
array.findIndex(callbackFunction)
```

## Examples Covered

```js
marks.findIndex(mark => mark === 92)

courses.findIndex(course => course === "node")
```

## Concepts Learned

* Index searching
* Position tracking

---

# 9️⃣ Conditional Statements

Used for decision-making.

---

## `if` Statement

### Syntax

```js
if(condition){
   // code
}
```

---

## `if...else`

### Syntax

```js
if(condition){
   // code
}
else{
   // code
}
```

---

## `if...else if...else`

### Syntax

```js
if(condition1){
   // code
}
else if(condition2){
   // code
}
else{
   // code
}
```

## Examples Covered

### Login status engine

```js
if(isLoggedIn == false){
   console.log("Please Login")
}
```

### Course price categorizer

```js
if(price < 500){
   console.log("Budget course")
}
```

## Concepts Learned

* Branching logic
* Multi-condition checking
* User-flow simulation

---

# 🔟 Ternary Operator

Short form of `if...else`.

## Syntax

```js
condition ? trueValue : falseValue
```

## Example Covered

```js
let enrollMessage =
hasPaid === true && hasCompletedBasics === true
? "Enroll now"
: "Complete Requirements"
```

## Concepts Learned

* Conditional expressions
* Cleaner decision making

---

# 1️⃣1️⃣ Logical Operators

Used to combine conditions.

## AND (`&&`)

```js
condition1 && condition2
```

## Examples Covered

```js
isLoggedIn == true && isProfileComplete == false
```

## Concepts Learned

* Combining multiple conditions
* Eligibility checking

---

# 1️⃣2️⃣ Objects in JavaScript

Objects store data as key-value pairs.

## Syntax

```js
const user = {
   name: "Ravi",
   age: 20
}
```

## Examples Covered

* User profile
* Settings object
* Marks object

---

# 1️⃣3️⃣ Object Operations

## Accessing Properties

```js
user.name
```

## Adding Properties

```js
user.lastlogin = "2026-01-01"
```

## Updating Properties

```js
user.role = "admin"
```

## Deleting Properties

```js
delete user.isActive
```

## Getting Object Keys

```js
Object.keys(user)
```

## Freezing Objects

```js
Object.freeze(settings)
```

## Concepts Learned

* CRUD operations on objects
* Object immutability
* Dynamic property management

---

# 1️⃣4️⃣ Loops — `for...in`

Used to iterate through object properties.

## Syntax

```js
for(let key in object){
   console.log(object[key])
}
```

## Example Covered

```js
for(let i in marks){
   total = total + marks[i]
}
```

## Concepts Learned

* Object traversal
* Calculating totals dynamically

---

# 1️⃣5️⃣ Functions

Reusable blocks of code.

## Syntax

```js
function functionName(parameters){
   // code
}
```

## Example Covered

```js
function courseDecider(price){
   if(price < 500){
      console.log("Budget course")
   }
}
```

## Concepts Learned

* Parameters
* Reusability
* Modular programming

---

# 1️⃣6️⃣ Arithmetic Operators

Used for mathematical operations.

| Operator | Purpose        |
| -------- | -------------- |
| `+`      | Addition       |
| `-`      | Subtraction    |
| `*`      | Multiplication |
| `/`      | Division       |
| `%`      | Modulus        |

## Examples Covered

```js
totalAmount += 500
totalAmount -= 200
```

---

# 1️⃣7️⃣ Assignment Operators

Used to update variable values.

| Operator | Meaning             |
| -------- | ------------------- |
| `+=`     | Add and assign      |
| `-=`     | Subtract and assign |
| `*=`     | Multiply and assign |

## Examples Covered

```js
totalAmount += 1200
```

---

# 1️⃣8️⃣ Real-World Example Scenarios Covered

## 🛒 Shopping Cart System

Concepts:

* filter()
* map()
* reduce()

---

## 🎓 Student Grade System

Concepts:

* grading logic
* averages
* object updates

---

## 🏦 Banking Transaction Analyzer

Concepts:

* balance calculation
* debit/credit logic

---

## 🌡 Temperature Analyzer

Concepts:

* averages
* conversions
* searching

---

## 🔐 Login Status Engine

Concepts:

* conditional statements
* logical operators

---

## 💳 Billing System

Concepts:

* arithmetic operations
* GST calculation

---

# 🚀 Skills Practiced

By completing these programs, you practiced:

✅ Problem-solving
✅ Data manipulation
✅ Functional programming basics
✅ Real-world JavaScript logic
✅ Writing clean callback functions
✅ Object handling
✅ Decision making
✅ Array traversal techniques
✅ Basic business logic implementation

---

# 🛠 Technologies Used

* JavaScript (ES6)
* Node.js runtime / Browser Console

---

# 📌 Key JavaScript Methods Covered

| Method            | Purpose           |
| ----------------- | ----------------- |
| `filter()`        | Filters data      |
| `map()`           | Transforms data   |
| `reduce()`        | Combines values   |
| `find()`          | Finds first match |
| `findIndex()`     | Finds index       |
| `Object.keys()`   | Gets object keys  |
| `Object.freeze()` | Freezes object    |

---

# 📖 Conclusion

This Week 1 assignment collection focuses heavily on:

* JavaScript fundamentals
* Array methods
* Object manipulation
* Conditional logic
* Array and object operations
* Functional programming concepts

These are core concepts required for:

* Frontend Development
* MERN Stack
* React.js
* Backend Development with Node.js
