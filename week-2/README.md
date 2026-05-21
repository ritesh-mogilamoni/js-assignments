# JavaScript Assignments — Week 2

## 📘 About This Repository

This repository contains multiple JavaScript mini-projects and hands-on assignments focused on:

* ES6 Modules
* Collections & Data Manipulation
* E-Commerce Business Logic
* Todo Application Logic
* Object Cloning
* Date Handling
* Functional Programming
* Real-World JavaScript Systems

The assignments are designed to simulate practical software development scenarios while strengthening JavaScript fundamentals and problem-solving skills.

Repository: [JS Assignments Week 2 Repo](https://github.com/ritesh-mogilamoni/js-assignments/tree/main/week-2?utm_source=chatgpt.com)

---

# 📂 Repository Structure

```txt id="1e3v0k"
week-2/
│
├── e-commerce/
│   ├── app.js
│   ├── cart.js
│   ├── discount.js
│   ├── payment.js
│   └── product.js
│
├── master-projects-on-collections/
│   ├── data.js
│   ├── module1.js
│   ├── module2.js
│   ├── module3.js
│   └── module4.js
│
├── todo-app/
│   ├── app.js
│   ├── task.js
│   └── validator.js
│
├── date-1.js
├── date-2.js
├── date-3.js
├── deepcopy.js
└── shallowcpy.js
```

---

# 🚀 Major Concepts Covered

This repository focuses heavily on:

* Arrays & Objects
* ES6 Modules
* Functional Programming
* Real-world Data Handling
* Date Manipulation
* Immutable Updates
* Object Cloning
* Business Logic Implementation
* Cart & Payment Systems
* Task Management Systems

---

# 📦 1️⃣ E-Commerce Store Project

## 📌 Overview

This project simulates a complete e-commerce backend workflow using JavaScript modules.

Features implemented:

* Product browsing
* Product searching
* Cart management
* Quantity updates
* Coupon system
* Payment processing
* Inventory management
* Order generation

---

## 📚 Concepts Covered

### ES6 Modules

#### Import Syntax

```js id="r0l7cx"
import { addToCart } from './cart.js';
```

#### Export Syntax

```js id="r2z4yo"
export function getCartTotal() {
   // code
}
```

### Array Methods Used

| Method        | Purpose             |
| ------------- | ------------------- |
| `find()`      | Find products/items |
| `findIndex()` | Locate indexes      |
| `filter()`    | Filter categories   |
| `reduce()`    | Calculate totals    |
| `push()`      | Add cart items      |
| `splice()`    | Remove items        |

---

## 🛒 Features Implemented

### Product Management

```js id="u7a2pq"
getAllProducts()
searchProducts("phone")
getProductById(1)
```

### Cart Operations

```js id="k5v1rz"
addToCart(1, 2)
updateQuantity(1, 3)
removeFromCart(3)
```

### Discount Engine

```js id="z8w0ms"
applyDiscount(cartTotal, "WELCOME10")
```

### Payment Workflow

```js id="m6j4yn"
processPayment("upi", "WELCOME10")
```

---

## 🧠 Skills Practiced

✅ Inventory handling
✅ Cart state management
✅ Payment workflows
✅ Coupon systems
✅ Modular architecture
✅ E-commerce business logic

---

# 📚 2️⃣ Master Projects on Collections

## 📌 Overview

This folder contains advanced collection-based mini-projects focused on:

* User management
* Course management
* Cart-course merging
* Role & permission systems
* Immutable updates
* Collection transformations

---

# 📖 Module 1 — User Management

## Features

* Get active users
* Extract usernames
* Check admin existence
* Find users by ID
* Immutable updates

---

## Concepts Covered

### `for...of` Loop

```js id="g1w7vk"
for(let user of users) {
   console.log(user)
}
```

### `find()`

```js id="z5c0qx"
users.find(user => user.id === 2)
```

### `structuredClone()`

```js id="n9k2tb"
let copyUsers = structuredClone(users)
```

---

# 📖 Module 2 — Course Collection System

## Features

* Published course filtering
* Sorting by price
* Extracting selected fields
* Calculating total values
* Immutable additions

---

## Concepts Covered

### Sorting Arrays

```js id="f2r8ld"
courses.sort((a, b) => b.price - a.price)
```

### Mapping Objects

```js id="d7v3ko"
courses.map(course => ({
   title: course.title,
   price: course.price
}))
```

### Reduce Method

```js id="v4x0ms"
courses.reduce((sum, course) =>
   sum + course.price, 0)
```

---

# 📖 Module 3 — Cart & Course Merging

## Features

* Merge collections
* Calculate cart totals
* Increase quantities immutably
* Remove cart items
* Validate paid courses

---

## Concepts Covered

### Object Mapping

```js id="h3n6zy"
courseMap[course.id] = course;
```

### Merging Data Collections

```js id="y7w4cp"
mergedCart.push({
   courseID: course.id,
   title: course.title
})
```

### Immutable Updates

```js id="f9r2xu"
let copyCart = structuredClone(cart)
```

---

# 📖 Module 4 — Role & Permission Engine

## Features

* Extract role names
* Permission checking
* Unique permission generation
* Immutable role creation

---

## Concepts Covered

### Object Keys

```js id="p5t0jd"
Object.keys(roles)
```

### Nested Loops

```js id="k8x3zr"
for(let role in roles){
   for(let perm of roles[role]){
      // code
   }
}
```

### Unique Permission Logic

```js id="n4m7wa"
if(!unique[perm]){
   uniquePermissions.push(perm)
}
```

---

## 🧠 Skills Practiced

✅ Collection transformations
✅ Access control systems
✅ Immutable programming
✅ Data normalization
✅ Permission engines
✅ Complex object handling

---

# ✅ 3️⃣ Todo App Project

## 📌 Overview

This project implements a simple task management system using JavaScript modules.

Features include:

* Adding tasks
* Completing tasks
* Task validation
* Task retrieval
* Due date checking

---

# 📚 Concepts Covered

## Module-Based Architecture

### Task Module

```js id="r6p2xs"
addTask()
completeTask()
getAllTasks()
```

### Validator Module

```js id="q4y8tw"
validateTitle()
validatePriority()
validateDueDate()
```

---

# 📖 Validation System

## Title Validation

```js id="e1u5zp"
title.length < 3
```

## Priority Validation

```js id="c9o4vl"
priority === "high"
```

## Due Date Validation

```js id="x0d7nf"
new Date(date)
```

---

# 📖 Task Management Logic

## Add Tasks

```js id="k2w1rs"
tasks.push({
   taskid,
   title,
   completed: false
})
```

## Complete Tasks

```js id="r8y4vm"
task.completed = true
```

## Find Tasks

```js id="f7q3tc"
tasks.find(task => task.taskid === taskId)
```

---

## 🧠 Skills Practiced

✅ Modular programming
✅ Input validation
✅ Task management logic
✅ State handling
✅ Real-world productivity app logic

---

# 📅 4️⃣ Date Handling Assignments

These files focus on JavaScript `Date` object manipulation and validation.

---

# 📖 date-1.js — Date Creation & Extraction

## Concepts Covered

### Creating Dates

```js id="u9e2mx"
let date = new Date()
```

### Extracting Date Components

```js id="w1k7qt"
date.getFullYear()
date.getMonth()
date.getDate()
```

### Formatting Dates

```js id="s4p0yr"
DD-MM-YYYY HH:mm:ss
```

---

# 📖 date-2.js — Date Comparison & Validation

## Features

* Deadline comparison
* User date validation
* Detecting invalid dates

---

## Concepts Covered

### Comparing Dates

```js id="d5n3zw"
enrollmentDeadline >= new Date()
```

### Splitting Strings

```js id="x7u0qa"
input.split("-")
```

### Date Validation Logic

```js id="f2v8jp"
date.getFullYear() === year
```

---

# 📖 date-3.js — Age Calculator

## Features

* Exact age calculation
* Birthday checking logic

---

## Concepts Covered

### Age Calculation

```js id="v0t2sn"
today.getFullYear() -
date.getFullYear()
```

### Birthday Validation

```js id="j8w5ko"
today.getMonth() < date.getMonth()
```

---

## 🧠 Skills Practiced

✅ Date manipulation
✅ Time comparisons
✅ Real-world validations
✅ Formatting dates
✅ Age calculations

---

# 🔄 5️⃣ Shallow Copy vs Deep Copy

These assignments demonstrate object cloning concepts in JavaScript.

---

# 📖 shallowcpy.js — Shallow Copy

## Concepts Covered

### Spread Operator

```js id="y4e1pc"
let userCopy = { ...user }
```

### Shared Nested References

```js id="v8q6mx"
userCopy.preferences.theme = "light"
```

---

## Learning Outcome

* Primitive values copy independently
* Nested objects still share references

---

# 📖 deepcopy.js — Deep Copy

## Concepts Covered

### `structuredClone()`

```js id="s1r9ku"
let orderCopy = structuredClone(order)
```

### Independent Nested Objects

```js id="d7o2xy"
orderCopy.customer.address.city = "Karimnagar"
```

---

## Learning Outcome

* Deep copies create fully isolated objects
* Changes do not affect original objects

---

# 📚 JavaScript Methods & Features Covered

| Concept                 | Usage                |
| ----------------------- | -------------------- |
| `find()`                | Searching items      |
| `findIndex()`           | Finding indexes      |
| `filter()`              | Filtering data       |
| `map()`                 | Transforming data    |
| `reduce()`              | Aggregation          |
| `sort()`                | Sorting arrays       |
| `push()`                | Adding elements      |
| `splice()`              | Removing elements    |
| `Object.keys()`         | Extract object keys  |
| `structuredClone()`     | Deep cloning         |
| Spread Operator (`...`) | Shallow copying      |
| `Date` Object           | Date handling        |
| ES6 Modules             | Modular architecture |

---

# 🛠 Technologies Used

* JavaScript (ES6)
* Node.js
* ES Modules

---

# 🧠 Real-World Systems Simulated

| Project           | Real-World Concept         |
| ----------------- | -------------------------- |
| E-Commerce        | Shopping platforms         |
| Todo App          | Productivity systems       |
| Role Engine       | Authentication systems     |
| Course Management | LMS platforms              |
| Date Validation   | Booking/enrollment systems |
| Deep Copy         | Secure data isolation      |

---

# 🚀 Skills Developed

By completing these assignments, you practiced:

✅ Functional Programming
✅ Collection Manipulation
✅ Business Logic Building
✅ Modular JavaScript Development
✅ Immutable Data Handling
✅ Input Validation
✅ Inventory & Cart Systems
✅ Access Control Logic
✅ Date Handling
✅ Object Cloning Concepts

---

# 📖 Conclusion

This Week 2 repository focuses heavily on:

* Advanced JavaScript fundamentals
* Real-world project structuring
* Data transformation techniques
* Collection-based programming
* Modular application architecture

These concepts are highly important for:

* MERN Stack Development
* React.js Applications
* Backend Development
* Full Stack Projects
* Scalable JavaScript Applications
