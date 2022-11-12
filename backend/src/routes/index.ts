const express = require("express")
const app=express()

const admin_routes = require("./admin.routes")
app.use("/",admin_routes)




export{}
module.exports = app