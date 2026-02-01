//Create HTTP Server
    //Import express module
import exp from 'express'
import {userApp} from './APIs/userapi.js';
import prodApp from './APIs/productapi.js'
    //create server
    const app=exp()
    //Assign port number
    app.listen(7890,()=>console.log("HTTP server listening on port 7890.."))

    //body parsing middleware
    app.use(exp.json());



//custom middleware creation
// function middleware1(req,res,next){
//     console.log("Middleware-1 executed")
//     next()
// }

// //app.use(middleware1)

// function middleware2(req,res,next){
//     console.log("Middleware-2 executed")
//     next()
// }

//Create API (req handlers - route)

//test local in-memory data


app.use('/user-api',userApp)

app.use('/product-api',prodApp)


    

