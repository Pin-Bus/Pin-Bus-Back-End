const tripStopService = require('../services/tripStopService');

async function markArrived(req, res) {
  try {
    const stop = await tripStopService.markArrived(req.params.id);
    res.json(stop);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function markPicked(req, res) {
  try {
    const stop = await tripStopService.markPicked(req.params.id);
    res.json(stop);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { markArrived, markPicked };
