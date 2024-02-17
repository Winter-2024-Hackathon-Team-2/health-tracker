const router = require("Express").Router();
const controller = require("./strategies.controller");

router.route("/").get(controller.list);
