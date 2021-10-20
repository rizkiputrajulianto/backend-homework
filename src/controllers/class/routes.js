const express = require("express");
const router = express.Router();
const createClass = require("./create.classController");
const getClass = require("./get.classController");
const updateClass = require("./update.classController");
const deleteClass = require("./delete.classController");

router.post('/', createClass.service);
router.get('/:id', getClass.service);
router.get('/', getClass.service);
router.put('/:id', updateClass.service);
router.delete('/:id', deleteClass.service);
module.exports = router;