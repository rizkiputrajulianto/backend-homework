const express = require('express');
const router = express.Router();
const routesClass = require("../controllers/class/routes");
const routesUsers = require("../controllers/users/routes");
const routesSchedule = require("../controllers/schedules/routes");
const routesMaterial = require("../controllers/materials/routes");


router.use("/class", routesClass);
router.use("/user", routesUsers);
router.use("/schedule", routesSchedule);
router.use("/materi", routesMaterial);

module.exports = router;