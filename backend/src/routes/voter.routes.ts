const router = require("express").Router()
const body_parser = require("body-parser")
const parser = body_parser.json()
const isAdmin = require("../middlewares/isAdmin.middleware")
const {addVoter} = require("../controllers/voter.controller")

router.route("/voter/add")
    .post(isAdmin,parser,addVoter)

    
export{}
module.exports = router