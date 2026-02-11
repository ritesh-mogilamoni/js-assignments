import exp from 'express'
import {connect} from 'mongoose'
import { userApp } from './APIs/userapi.js'
import { productApp } from './APIs/productapi.js'
import { config } from 'dotenv'
config()

const app=exp()

app.use(exp.json())

async function connectToDB(){

try{
    await connect(process.env.DB_URL)
    console.log("Connection established successfully")
    app.listen(process.env.PORT,()=>console.log("Listening on 2000 port"))
}
catch(err){
    console.log(err)
}
}

connectToDB()

app.use('/userapi',userApp)
app.use('/productapi',productApp)

app.use((err, req, res, next) => {
    res.status(500).json({error: err.message})
})
