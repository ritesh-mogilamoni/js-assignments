// 1. Validate task title (not empty, min 3 chars)
function validateTitle(title) {
    if(title.length<3){
        return false
    }
    else{
        return true
    }
    }
                      
                      
    // 2. Validate priority (must be: low, medium, high)
function validatePriority(priority) {
    if(priority==="low" ||priority==="medium"||priority==="high"){
        return true
    }
    else{
        return false
    }
    }

// 3. Validate due date (must be future date)
function validateDueDate(date) {
    let dueDate=new Date(date)
    if(dueDate<Date.now()){
        return false
    }
    else{
        return true
    }
}

export {validateTitle,validatePriority,validateDueDate}