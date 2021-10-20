const express = require('express');
const router = express.Router();
const routesClass = require("../controllers/class/routes");


router.use("/class", routesClass);


module.exports = router;