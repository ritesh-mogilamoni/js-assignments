import exp from 'express'
import { hash,compare } from 'bcryptjs'
import { UserModel } from '../models/user-model.js'
import jwt from 'jsonwebtoken'
import { verifyToken } from '../middlewares/verifyToken.js'
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
    //hash the password
    let hashedPAss=await hash(newUser.password,12)
    //replace plain password with hashed pass
    newUser.password=hashedPAss
    //create new user document
    let newUserDoc=new UserModel(newUser)
    
    await newUserDoc.save()
    res.status(201).json({message:"User created successfully"})

})

//User authentication(login) route
userApp.post('/auth',async(req,res)=>{

    let userCred=req.body

    let userOfDB=await UserModel.findOne({username:userCred.username})
    
    if(userOfDB===null){
        return res.status(404).json({message:"Invalid Username"})
    }
    //compare pasword
    let status=await compare(userCred.password,userOfDB.password)
    //if pass dont match
    if(status===false){
        return res.status(404).json({message:"Invalid Password"})
    }
    //create signed token
    let signedToken=jwt.sign({username:userCred.username},'qwerty',{expiresIn:30})

    //save token as httpOnly cookie
    res.cookie('token',signedToken,{
        httpOnly:true,
        secure:false,
        sameSite:'lax'
    })

    //send token in res
    //res.status(200).json({message:"login success",token:signedToken}) token shouldnt be sent in response

    res.status(200).json({message:"login success"})
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

userApp.get('/test',verifyToken,(req,res)=>{
    
    res.json({message:"Test route"})
})


//Delete user
userApp.delete('/users/:id',async(req,res)=>{
    let objId=req.params.id

    let deletedUser=await UserModel.findByIdAndDelete(objId)
    res.status(200).json({message:"user removed",payload:deletedUser})
})

