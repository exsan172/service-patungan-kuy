const express = require('express');
const router = express.Router();
const serviceControllers = require("../controllers/service.controller")

router.get('/', [
	serviceControllers.index
]);

module.exports = router;
