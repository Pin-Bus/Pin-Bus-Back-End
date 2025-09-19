const express = require('express');
const router = express.Router();
const tripController = require('../controllers/tripController');

router.post('/', tripController.createTrip);          // create new trip
router.patch('/:id/start', tripController.startTrip); // start trip
router.patch('/:id/complete', tripController.completeTrip); // complete trip

module.exports = router;
