const router = require("express").Router()
const body_parser = require("body-parser")
const parser = body_parser.json()
const isAdmin = require("../middlewares/isAdmin.middleware")
const {addVotingArea,listVotingArea} = require("../controllers/voting_area.controller")

router.route("/voting-area/add")
    .post(isAdmin,parser,addVotingArea)
router.route("/voting-area/list")
    .get(isAdmin,parser,listVotingArea)
export{}
module.exports = router