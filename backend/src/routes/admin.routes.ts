const router = require("express").Router()
const body_parser = require("body-parser")
const parser = body_parser.json()
const {addAdmin,listAdmins} = require("../controllers/admin.controller")
const {login} = require("../controllers/admin_auth.controller")

router.route("/admin/login")
    .post(parser,login)

router.route("/admin/add")
    .post(parser,addAdmin)

router.route("/admin/list")
    .get(parser,listAdmins)

export{}
module.exports = router