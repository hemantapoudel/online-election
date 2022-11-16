const router = require("express").Router()
const body_parser = require("body-parser")
const parser = body_parser.json()
const isAdmin = require("../middlewares/isAdmin.middleware")
const {addParty} = require("../controllers/party.controller")
const uploader = require("../middlewares/uploader.middleware")

router.route("/party/add")
    .post(isAdmin,uploader.single('party_symbol'),addParty)
    
export{}
module.exports = router