const router = require("express").Router();
const controller = require("./strategies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").get(controller.search).all(methodNotAllowed)

router.route("/:strategyType").get(controller.listByStrategyType).all(methodNotAllowed);

module.exports = router; 