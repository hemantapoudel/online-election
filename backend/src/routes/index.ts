const express = require("express")
const app=express()

const admin_routes = require("./admin.routes")
const voter_routes = require("./voter.routes")
const voting_area_routes = require("./voting_area.routes")

app.use("/",admin_routes)
app.use("/",voter_routes)
app.use("/",voting_area_routes)


export{}
module.exports = app