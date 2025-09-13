const express = require('express');
const router = express.Router();
const driverController = require('../controllers/driverController');

router.get('/', driverController.getDrivers);
router.post('/', driverController.addDriver);
router.put('/:id', driverController.editDriver);
router.delete('/:id', driverController.removeDriver);

module.exports = router;
