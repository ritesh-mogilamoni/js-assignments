import exp from 'express'
//create min-express(Seperate route) app
const userApp=exp.Router()

let users=[]

//get req handling route(read user)
    userApp.get('/users',(req,res)=>{
        //send res to client
        res.status(200).json({message:"all users",payload:users})   //message,payload
    })

    // put req handling route(read user)
    userApp.put('/users/:id',(req,res)=>{
        //get modified user from req
        //find user with id exists in array
        //if user not found, send res as "user not found"
        //if user found, then modify the user
        //send res as "user modified"
        let modifiedUser=req.body
        
        let userIndex=users.findIndex(element=>element.id===modifiedUser.id)
        
        if(userIndex!==-1){
            //console.log("User found")
            let deletedUser=users.splice(userIndex,1,modifiedUser)
            //users[userIndex]=modifiedUser
            res.status(200).json({message:"User modified"})

        }
        else{
            console.log("User not found")
            res.status(404).json({message:"User not modified"})
        }
    })

    // post req handling route(read user)
    userApp.post('/users',(req,res)=>{
        let newUser=req.body
        //console.log("NewUSer",newUser)
        // res.json({message:"This response from POST req handler"})
        users.push(newUser)

        res.json({message:"NewUser created"})
    })

    userApp.get('/users/:id',(req,res)=>{
        //console.log(req.params)

        let userId=Number(req.params.id)
        
        let user=users.find(user=>user.id===userId)

        if(!user){
            res.status(404).json({message:"User not found"})
        }
        else{
            res.status(200).json({message:"User Present",payload:user})
        }
    })

    // delete req handling route(read user)
    userApp.delete('/users/:id',(req,res)=>{
        let userId=Number(req.params.id)
        let userIndex=users.findIndex(user=>user.id===userId)

        if(userIndex===-1){
            res.status(404).json({message:"User not found"})
        }
        else{
            let deletedUser=users.splice(userIndex,1)
            res.status(200).json({message:"User Deleted",payload:deletedUser})
        }

       // res.json({message:"This response from DELETE req handler"})
    })

export {userApp}