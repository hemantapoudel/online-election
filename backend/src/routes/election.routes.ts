const router = require("express").Router()
const body_parser = require("body-parser")
const parser = body_parser.json()
const isAdmin = require("../middlewares/isAdmin.middleware")
const {addElection,listElection} = require("../controllers/election.controller")
const uploader = require("../middlewares/uploader.middleware")

router.route("/election/add")
    .post(isAdmin,parser,addElection)
router.route("/election/list")
    .get(isAdmin,parser,listElection)
export{}
module.exports = router