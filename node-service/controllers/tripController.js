const tripService = require('../services/tripService');

async function createTrip(req, res) {
  try {
    const trip = await tripService.createTrip(req.body);
    res.json(trip);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function startTrip(req, res) {
  try {
    const trip = await tripService.startTrip(req.params.id);
    res.json(trip);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function completeTrip(req, res) {
  try {
    const trip = await tripService.completeTrip(req.params.id);
    res.json(trip);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { createTrip, startTrip, completeTrip };
