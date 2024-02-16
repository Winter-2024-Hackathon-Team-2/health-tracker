const router = require("Express").Router();
const controller = require("./strategies.controller");

router.route("/").get(controller.list);
router.route("/sleep").get(controller.listSleep);
router.route("/stress").get(controller.listStress);
router.route("/physical-activity").get(controller.listPhysical);
router.route("/general").get(controller.listGeneral);