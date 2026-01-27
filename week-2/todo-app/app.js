import { addTask,getAllTasks,completeTask } from "./task.js";

// Test your module system

// 1. Add some tasks
addTask("Submit Assignment1","high",'12-02-2026')
addTask("Submit Assignment2","medium",'22-02-2026')
addTask("Submit Assignment3","low",'04-03-2026')

// 2. Display all tasks
console.log(getAllTasks())

// 3. Complete a task
completeTask(2)

// 4. Display all tasks again
console.log(getAllTasks())