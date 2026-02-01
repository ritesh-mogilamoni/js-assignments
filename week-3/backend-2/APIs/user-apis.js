import exp from 'express'
import { UserModel } from '../models/user-model.js'
export const userApp=exp.Router()



//USER APIs

//Create user
//Read user
userApp.get('/users',async(req,res)=>{
    //read users from DB
    let usersList=await UserModel.find()
    //send res
    res.json({payload:usersList})
})

userApp.post('/users',async(req,res)=>{
    let newUser=req.body
    //create new user document
    let newUserDoc=new UserModel(newUser)
    
    await newUserDoc.save()
    res.status(201).json({message:"User created successfully"})

})

userApp.get('/users/:id',async(req,res)=>{
    //get objid from url param
    let objId=req.params.id
    //find user in DB
    let userObj=await UserModel.findById(objId)
    //send res
    res.status(200).json({message:"user",payload:userObj})
})

//Update user
userApp.put('/users/:id',async(req,res)=>{
    //get objid from url param
    let objId=req.params.id
    //get modified user from req
    let modifiedUser=req.body
    //make update
    let latestUser=await UserModel.findByIdAndUpdate(objId,
        {$set:{...modifiedUser}},
        {new:true,runValidators:true}
    )
    //send res
    res.status(200).json({message:"user",payload:latestUser})
})


//Delete user
userApp.delete('/users/:id',async(req,res)=>{
    let objId=req.params.id

    let deletedUser=await UserModel.findByIdAndDelete(objId)
    res.status(200).json({message:"user removed",payload:deletedUser})
})








