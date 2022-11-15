const express = require("express")
const app=express()

const admin_routes = require("./admin.routes")
const voter_routes = require("./voter.routes")

app.use("/",admin_routes)
<<<<<<< HEAD
=======
app.use("/",voter_routes)
>>>>>>> ec69da86d2138a3e3d8f63c5a1a32ca83367815f


export{}
module.exports = app