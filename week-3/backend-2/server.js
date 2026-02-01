import exp from 'express'
import { connect } from 'mongoose'
import { userApp } from './APIs/user-apis.js'
import {prodApp} from './APIs/product-api.js'

const app=exp()
app.use(exp.json())
const port=4000

//connect to db server
async function connectDB(){
    try{
        await connect('mongodb://localhost:27017/anuragdb2')
        console.log("Server started successfully")
        app.listen(port,()=>console.log("Sever is listening on 4000"))
    }
    catch(err){
        console.log("Err:",err)
    }
    
    
}

connectDB()


app.use('/user-api',userApp)

app.use('/prod-api',prodApp)