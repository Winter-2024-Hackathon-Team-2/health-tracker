const router = require("express").Router();
const controller = require("./history.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
  .route("/")
  .post(controller.create)
  .get(controller.list)
  .all(methodNotAllowed);

router
  .route("/:user_id")
  .get(controller.read2)
  .post(controller.create)
  .put(controller.update)
  .all(methodNotAllowed);

// router.route("/:track_activity_id").get(controller.read).all(methodNotAllowed);
router.route("/users/:user_id").get(controller.read2).all(methodNotAllowed);
router.route("/:user_id/new").post(controller.create).all(methodNotAllowed);

module.exports = router;
