import {validateTitle,validatePriority,validateDueDate} from './validator.js';
const tasks = [];
let taskid=1
// 1. Add new task
function addTask(title, priority, dueDate) {
    // Validate using imported functions
    if(validateTitle(title)&&validatePriority(priority)&&validateDueDate(dueDate))  // If valid, add to tasks array
    {
        
        tasks.push({taskid,title,completed:false})
        taskid+=1
        return "success"        // Return success
    }
    else
        return "error"          // Return error message
    
    
    }

// 2. Get all tasks
function getAllTasks() {
    // Return all tasks
    return tasks

    }

// 3. Mark task as complete
function completeTask(taskId) {
    // Find task and mark as complete
    let task=tasks.find(element=>element.taskid===taskId)
    task.completed=true
    console.log("Task:",taskId,"is completed")

    }

// Export functions
export {addTask,getAllTasks,completeTask}
                 