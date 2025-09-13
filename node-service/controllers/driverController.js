const driverService = require('../services/driverService');

async function getDrivers(req, res) {
  try {
    const drivers = await driverService.getAllDrivers();
    res.json(drivers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function addDriver(req, res) {
  try {
    const driver = await driverService.createDriver(req.body);
    res.json(driver);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function editDriver(req, res) {
  try {
    const driver = await driverService.updateDriver(req.params.id, req.body);
    res.json(driver);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function removeDriver(req, res) {
  try {
    await driverService.deleteDriver(req.params.id);
    res.json({ message: 'Driver deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { getDrivers, addDriver, editDriver, removeDriver };
