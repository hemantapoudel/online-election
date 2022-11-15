const jwt = require("jsonwebtoken")
const Admin = require("../models/admin.model")
let CONSTANTS = require("../config/constants")

const isAdmin = async (req:any,res:any,next:any)=>{
    let token = '';
    if(req.headers['authorization']){
        token = req.headers['authorization']
    }
    try{
        let data=jwt.verify(token,CONSTANTS.JWT_SECRET);
        console.log(data)
        let admin = await Admin.findById(data.id)
        if(!token || !data || !admin){
            next({
                status: 401,
                msg:"Unauthorized Accesss"
            })
        }
        else{
            req.auth_user=admin
            next()
        }
 
    } catch(error){
        res.status(501).json({msg:"Unauthorized ACCESS"})
    }
}
<<<<<<< HEAD
=======

export{}
>>>>>>> ec69da86d2138a3e3d8f63c5a1a32ca83367815f
module.exports = isAdmin
export {}
