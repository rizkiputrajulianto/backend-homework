const express = require("express");
const router = express.Router();
const createUsers = require("./create.userController");
const getUsers = require("./get.userController");
const putUsers = require("./update.userController");
const delUsers = require("./delete.userController");

router.post('/', createUsers.service);
router.get('/', getUsers.service);
router.get('/:id', getUsers.service);
router.put('/:id', putUsers.service);
router.delete('/:id', delUsers.service);

module.exports = router;