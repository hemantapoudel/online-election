const router = require("express").Router()
const body_parser = require("body-parser")
const parser = body_parser.json()
const isAdmin = require("../middlewares/isAdmin.middleware")
const {addCandidate,listAllCandidates,fetchCandidateById} = require("../controllers/candidate.controller")
const uploader = require("../middlewares/uploader.middleware")

router.route("/candidate/add")
    .post(isAdmin,uploader.single('photo'),addCandidate)

router.route("/candidate/list")
    .get(isAdmin,listAllCandidates)

router.route("/candidate/:id")
    .get(isAdmin,fetchCandidateById)
    
export{}
module.exports = router