// let tasks=[]
// taskid=1
// title="Alphabets"
// tasks.push({taskid,title})
// taskid+=1
// tasks.push({taskid,title:"Habits"})
// console.log(tasks)

function validateDueDate(date) {
    let dueDate=new Date(date)
    let currDate=new Date()
    console.log(currDate)
    console.log(5===5)
    console.log(dueDate===currDate)
    if(dueDate===Date.now()){
        console.log(dueDate,Date.now())
        return true
    }
    else{
        return false
    }
}

console.log(validateDueDate('2026-01-26'))