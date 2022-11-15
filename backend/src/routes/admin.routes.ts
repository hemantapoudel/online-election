const router = require("express").Router()
const body_parser = require("body-parser")
const parser = body_parser.json()
const uploader = require('../middlewares/uploader.middleware')
const { addAdmin, listAdmins } = require("../controllers/admin.controller")
const { login } = require("../controllers/admin_auth.controller")
const isAdmin = require("../middlewares/isAdmin.middleware")

router.route("/admin/login")
    .post(parser, login)

router.route("/admin/add")
    .post(isAdmin, parser, addAdmin)

router.route("/admin/list")
    .get(isAdmin, listAdmins)

export { }
module.exports = router