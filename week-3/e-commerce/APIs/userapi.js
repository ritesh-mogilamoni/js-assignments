import exp from 'express'
import { UserModel } from '../models/user-model.js'
import { ProdModel } from '../models/product-model.js'
import {hash,compare} from 'bcryptjs'
export const userApp=exp.Router()

userApp.post('/users',async (req,res)=>{
    let newUser=req.body
    await new UserModel(newUser).validate()
    let hashedPAss=await hash(newUser.password,12)
    newUser.password=hashedPAss
        //create new user document
        let newUserDoc=new UserModel(newUser)
        
        await newUserDoc.save({validateBeforeSave:false})
        res.status(201).json({message:"User created successfully"})
    
})

// userApp.put("/user-cart/user-id/:uid/product-id/:pid",async(req,res)=>{
//     let {uid,pid}=req.params    //{uid:"",pid:""}
//     let user=await UserModel.findById(uid)
//     //check user
//     if(!user){
//         return res.status(401).json({message:"User not found"})
//     }
//     //check product
//     let product=await ProdModel.findById(pid)
//     if(!product){
//         return res.status(401).json({message:"Productnot found"})
//     }

//     let quantity=UserModel
//     //perform update
//     let modifiedUser=await UserModel.findByIdAndUpdate(
//         uid,
//         {$push:{cart:{product:pid}}},
//         {new:true}).populate("cart.product")
//     res.status(200).json({message:"Modified",payload:modifiedUser})
// })

//Read user by id 
userApp.get("/users/:uid",async (req,res)=>{
    let {uid}=req.params
    
    let user=await UserModel.findById(uid).populate("cart.product","productName price")

    res.status(200).json({message:"User",payload:user})
})

userApp.put("/user-cart/user-id/:uid/product-id/:pid", async (req, res) => {
    let { uid, pid } = req.params;
    // check user
    let user = await UserModel.findById(uid)
    if (!user) {
        return res.status(401).json({ message: "User not found" })
        }
    // check product
    let product = await ProdModel.findById(pid)
    if (!product) {
        return res.status(401).json({ message: "Product not found" })
        }
    
    let productIndex = user.cart.findIndex(item=>item.product==pid)
  
//let modifiedUser=await UserModel.findByIdAndUpdate(
//         uid,
//         {$push:{cart:{product:pid}}}
    if(productIndex !== -1) {
        user.cart[productIndex].quantity+= 1
    } 
    else {
    user.cart.push({product: pid, quantity: 1})
    }

    let modifiedUser = await user.save()
    //await modifiedUser.populate("cart.product")

    res.status(200).json({message: "Cart updated successfully",
    payload: modifiedUser
  })
})
