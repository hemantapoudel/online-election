const express = require("express")
const app = express()
require("./config/mongo.config")

const routes = require("./routes/index")
app.use("",routes)


app.listen(3003,"localhost",(err:any)=>{
    if(err){
        console.log("Error connecting server")
    } else{
        console.log("Server connected to port 3003")
        console.log("Press Ctrl + C to end the connection")
    }
})

export{}