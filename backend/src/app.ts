const express = require("express")
const cors = require('cors')

var corsOptions = {
    origin: '*'
}
const app = express()


require("./config/mongo.config")
<<<<<<< HEAD
app.use(cors(corsOptions))
const routes = require("./routes/index")
app.use(routes)



app.use((err: any, req: any, res: any, next: any) => {
    let status_code = err?.status || 500;
    let msg = err?.msg || "Error";
=======
const path = require("path")

const routes = require("./routes/index")
app.use("",routes)
app.use('/uploads', express.static('public'));


app.use((err:any,req:any,res:any,next:any)=>{
    let status_code=err?.status||500;
    let msg=err?.msg||"Errorr";
>>>>>>> ec69da86d2138a3e3d8f63c5a1a32ca83367815f
    res.status(status_code).json(
        {
            result: null,
            status: false,
            msg: msg
        }
    )
<<<<<<< HEAD
})
=======
}) 
 
>>>>>>> ec69da86d2138a3e3d8f63c5a1a32ca83367815f


app.listen(3003, "localhost", (err: any) => {
    if (err) {
        console.log("Error connecting server")
    } else {
        console.log("Server connected to port 3003")
        console.log("Press Ctrl + C to end the connection")
    }
})

export { }