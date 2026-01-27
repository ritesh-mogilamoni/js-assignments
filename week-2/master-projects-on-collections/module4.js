// MODULE 4: ROLE & PERMISSION ENGINE


import { roles } from "./data.js";

let roleNames=Object.keys(roles)    //   -> Getting all role names
console.log(roleNames)

//   -> Check if student can delete
//console.log(roles.student.push('delete'))
let del=false
for( let i of roles.student){
    if(i==='delete'){
        del=true
        break 
    }
}
if(del===false){
    console.log("Student cannot delete")
}
else{
    console.log("Student can delete")
}


//   -> Create a flat list of all unique permissions
let unqPermissions=[];
let unique={}

for (let role in roles) {
    for (let perm of roles[role]) {
        if (!unique[perm]) {
            unqPermissions.push(perm)
            unique[perm]=true
        }
    }
}

//console.log(unique)
console.log(unqPermissions)

//   -> Add new role moderator immutably

let copyRoles=structuredClone(roles)

copyRoles.moderator=[]

console.log(copyRoles)