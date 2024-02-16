const router = require("express").Router();
const controller = require("./history.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").get(controller.list).all(methodNotAllowed);
router.route("/:track_activity_id").get(controller.read).all(methodNotAllowed);
router.route("/users/:user_id").get(controller.read2).all(methodNotAllowed);

module.exports = router;