const express = require('express');
const router = express.Router();
const serviceControllers = require("../controllers/service.controller")

router.get('/groub', [
	serviceControllers.groub_all
]);

router.delete('/groub', [
	serviceControllers.groub_delete
]);

router.put('/groub', [
	serviceControllers.groub_update
]);

router.get('/groub/:id', [
	serviceControllers.groub_detail
]);

router.get('/price', [
	serviceControllers.groub_all
]);

router.delete('/price/:id', [
	serviceControllers.groub_delete
]);

router.put('/price', [
	serviceControllers.groub_update
]);

router.get('/price/:id', [
	serviceControllers.groub_detail
]);

module.exports = router;
