const express = require('express');
const router = express.Router();
const routesClass = require("../controllers/class/routes");
const routesUsers = require("../controllers/users/routes");
const routesSchedule = require("../controllers/schedules/routes");


router.use("/class", routesClass);
router.use("/user", routesUsers);
router.use("/schedule", routesSchedule);


module.exports = router;