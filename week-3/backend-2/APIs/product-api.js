import exp from 'express'
import { ProdModel } from '../models/product-model.js'
export const prodApp=exp.Router()

prodApp.get('/products',async(req,res)=>{
       let productsList=await ProdModel.find()
        //send res
        res.status(200).json({message:"All Products",payload:productsList})
    })

prodApp.get('/products/:id',async(req,res)=>{
    let objId=req.params.id

    let prodObj=await ProdModel.findById(objId)
        //send res
        res.status(200).json({message:"Product",payload:prodObj})
    })

prodApp.post('/products',async(req,res)=>{
       let newProduct=req.body
       let newProductDoc=ProdModel(newProduct)
       await newProductDoc.save()
        //send res
        res.status(201).json({message:"New product created successfully"})
    })
    
//Update product
prodApp.put('/products/:id',async(req,res)=>{
    
    let objId=req.params.id
    
    let modifiedProduct=req.body
    //make update
    let latestProduct=await ProdModel.findByIdAndUpdate(objId,
        {$set:{...modifiedProduct}},
        {new:true}
    )

    
    //send res
    res.status(200).json({message:"Product",payload:latestProduct})
})