const express = require('express');
const router = express.Router();
const controller = require('../controllers/ceps');

router.get('/', controller.get);
router.get('/:id', controller.getById);

module.exports = router;
