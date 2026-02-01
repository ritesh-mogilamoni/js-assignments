import exp from 'express'
//create min-express(Seperate route) app
const prodApp=exp.Router()


let products=[]

prodApp.get('/products',(req,res)=>{
    res.status(200).json({message:"All Users",payload:products})
})
prodApp.get('/products-id/:id',(req,res)=>{
    let prodId=Number(req.params.id)
    let product=products.find(product=>product.productId===prodId)
    res.status(200).json({message:"Product by ID",payload:product})
})
prodApp.get('/products-brand/:brand',(req,res)=>{
    let brand=req.params.brand
    let product=products.find(product=>product.brand===brand)
    res.status(200).json({message:"Product by brand",payload:product})
})

prodApp.post('/products',(req,res)=>{
    let product=req.body
    //console.log(data)
    products.push(product)
    res.status(200).json({message:"Data is pushed"})
})

prodApp.put('/products/:id',(req,res)=>{
    let prodId=Number(req.params.id)
    console.log(prodId)
    let modifiedProduct=req.body
    
    let prodIndex=products.findIndex(product=>product.productId===prodId)
    console.log(prodIndex)
    if(prodIndex===-1){
        res.status(404).json({message:"Product Id not found"})
    }
    else{
        products.splice(prodIndex,1,modifiedProduct)
        res.status(200).json({message:"Product modified"})
    }
})

prodApp.delete('/products/:id',(req,res)=>{
    let prodId=req.params.id
    let prodIndex=products.findIndex(product=>product.id===prodId)
    
    let deletedProduct=products.splice(prodIndex,1)
    res.status(200).json({message:"Product deleted",payload:deletedProduct})
})

export default prodApp