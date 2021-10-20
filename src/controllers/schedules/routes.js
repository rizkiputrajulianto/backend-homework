const express = require('express');
const router = express.Router();
const createSchedule = require("./create.scheduleController");
const getSchedule = require("./get.scheduleController");
const putSchedule = require("./update.scheduleController");
const delSchedule = require("./delete.scheduleController");

router.post('/', createSchedule.service);
router.get('/', getSchedule.service);
router.get('/:id', getSchedule.service);
router.put('/:id', putSchedule.service);
router.delete('/:id', delSchedule.service);

module.exports = router;