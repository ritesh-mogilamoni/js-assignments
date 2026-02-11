import exp from 'express'
import { ProdModel } from '../models/product-model.js'
export const productApp=exp.Router()

//GET route
productApp.get('/products',async(req,res)=>{
    let productsList=await ProdModel.find()
    res.status(200).json({message:"All Products",payload:productsList})
})


//POST route
productApp.post('/products',async(req,res)=>{
    let productObj=req.body
    let productDocument=ProdModel(productObj)
    productDocument.save()
    res.status(201).json({message:"Product obj created"})
})

