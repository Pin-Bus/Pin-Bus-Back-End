const monitorService = require('../services/monitorService');

async function getMonitors(req, res) {
  try {
    const monitors = await monitorService.getAllMonitors();
    res.json(monitors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function addMonitor(req, res) {
  try {
    const monitor = await monitorService.createMonitor(req.body);
    res.json(monitor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function editMonitor(req, res) {
  try {
    const monitor = await monitorService.updateMonitor(req.params.id, req.body);
    res.json(monitor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function removeMonitor(req, res) {
  try {
    await monitorService.deleteMonitor(req.params.id);
    res.json({ message: 'Monitor deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { getMonitors, addMonitor, editMonitor, removeMonitor };
