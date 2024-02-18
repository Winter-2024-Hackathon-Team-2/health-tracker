const router = require("express").Router();
const controller = require("./strategies.controller");

router.route("/").get(controller.list);

router.route("/:strategyType").get(controller.list);

module.exports = router; 