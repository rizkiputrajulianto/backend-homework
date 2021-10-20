const express = require('express');
const router = express.Router();
const createMaterial = require("./create.materialController");
const getMaterial = require("./get.materialController");
const putMaterial = require("./update.materialController");
const delMaterial = require("./delete.materialController");

router.post('/', createMaterial.service);
router.get('/', getMaterial.service);
router.get('/:id', getMaterial.service);
router.put('/:id', putMaterial.service);
router.delete('/:id', delMaterial.service);

module.exports = router;