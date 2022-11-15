const express = require("express")
const app=express()

const admin_routes = require("./admin.routes")
const voter_routes = require("./voter.routes")

app.use("/",admin_routes)
app.use("/",voter_routes)


export{}
module.exports = app