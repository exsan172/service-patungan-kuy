const express = require('express');
const router = express.Router();
const serviceControllers = require("../controllers/service.controller")

router.get('/groub', [
	serviceControllers.groub_all
]);

router.get('/price', [
	serviceControllers.price_all
]);

module.exports = router;
