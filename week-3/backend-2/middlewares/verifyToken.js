import jwt from 'jsonwebtoken'
//import cookieParser from "cookie-parser"
export function verifyToken(req,res,next){
    let signedToken=req.cookies.token
    if(!signedToken){
        return res.status(401),json({message:"Please login first"})
    }

    let decodedTOken=jwt.verify(signedToken,"qwerty")
    console.log("Decoded Token:",decodedTOken)
    next()


}