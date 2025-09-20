const express = require('express');
const router = express.Router();
const monitorController = require('../controllers/monitorController');

router.get('/', monitorController.getMonitors);
router.post('/', monitorController.addMonitor);
router.put('/:id', monitorController.editMonitor);
router.delete('/:id', monitorController.removeMonitor);

module.exports = router;
