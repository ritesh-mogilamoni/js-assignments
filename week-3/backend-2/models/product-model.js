import {Schema,model} from 'mongoose'

const productSchema=new Schema({
    productName:{
        type:String,
        required:[true,"Product Name is required"],
        minLength:[4,"Minimum length should be of 4 characters"],
        maxLength:[20,"Max length exceeded"]
    },
    pid:{
        type:Number,
        required:[true,"Product ID is required"]
    },

    price:{
        type:Number,
        required:[true,"Product Price is required"],
        min:[1,"Price shouls be greater than 1"]
    }

})

export const ProdModel=model('product',productSchema)
