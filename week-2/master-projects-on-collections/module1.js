import {users} from './data.js'

let activeUsers=[]

for (let i of users){
    if(i.active===true){
        activeUsers.push(i)         //Get only active users
    }
}

console.log(activeUsers)

let activeUsersNames=[]

for (let i of activeUsers){         
    activeUsersNames.push(i.name)   //Extract names of active users
}

console.log(activeUsersNames)

for(let i of activeUsers){
    if(i.role==="admin"){           //Check if any admin exists
        console.log("Admin Exists")
    }
}

//Find user by id

console.log(users.find(user=>user.id===2))



//Deactivate a user immutably

let copyUsers=structuredClone(users)

copyUsers[1].active=false

console.log(copyUsers)