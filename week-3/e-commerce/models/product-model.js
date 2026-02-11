import {Schema,model} from 'mongoose'

const productSchema=new Schema({
    productName:{
        type:String,
        required:[true,"Product Name is required"],
        
    },

    price:{
        type:Number,
        required:[true,"Product Price is required"],
        min:[1,"Price shouls be greater than 1"]
    },
    brand:{
        type:String,
        required:[true,"Brand is required"]
    }
    

},{
        strict:"throw",
        timestamps:true,
        versionKey:false
    })

export const ProdModel=model('product',productSchema)

