const parentService = require('../services/parentService');

async function getParents(req, res) {
  try {
    const parents = await parentService.getAllParents();
    res.json(parents);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function addParent(req, res) {
  try {
    const { user, parent } = req.body; // <-- split into user + parent
    const createdParent = await parentService.createParent(user, parent);
    res.json(createdParent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { getParents, addParent };
