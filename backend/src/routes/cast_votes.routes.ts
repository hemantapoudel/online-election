const router = require("express").Router()
const body_parser = require("body-parser")
const parser = body_parser.json()
const isAdmin = require("../middlewares/isAdmin.middleware")
const isVoter = require("../middlewares/isVoter.middleware")
const {addCastVoteByAdmin,listCastVoteByVotingArea} = require("../controllers/cast_vote.controller")
const uploader = require("../middlewares/uploader.middleware")

router.route("/cast-vote/add")
    .post(isAdmin,parser,addCastVoteByAdmin)
router.route("/cast-vote/list")
    .get(isVoter,parser,listCastVoteByVotingArea)

export{}
module.exports = router