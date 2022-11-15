const router = require("express").Router()
const body_parser = require("body-parser")
const parser = body_parser.json()
<<<<<<< HEAD
const uploader = require('../middlewares/uploader.middleware')
const { addAdmin, listAdmins } = require("../controllers/admin.controller")
const { login } = require("../controllers/admin_auth.controller")
const isAdmin = require("../middlewares/isAdmin.middleware")

router.route("/admin/login")
    .post(parser, login)
=======
const {addAdmin,listAdmins} = require("../controllers/admin.controller")
const {adminLogin} = require("../controllers/admin_auth.controller")
const isAdmin = require("../middlewares/isAdmin.middleware")

router.route("/admin/login")
    .post(parser,adminLogin)
>>>>>>> ec69da86d2138a3e3d8f63c5a1a32ca83367815f

router.route("/admin/add")
    .post(isAdmin, parser, addAdmin)

router.route("/admin/list")
    .get(isAdmin, listAdmins)

export { }
module.exports = router