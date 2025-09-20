const express = require('express');
const router = express.Router();
const tripStopController = require('../controllers/tripStopController');

router.patch('/:id/arrived', tripStopController.markArrived);
router.patch('/:id/picked', tripStopController.markPicked);

module.exports = router;
