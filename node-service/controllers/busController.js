const busService = require("../services/busService");

class BusController {
  async getAll(req, res) {
    try {
      const buses = await busService.getAll();
      res.json(buses);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getById(req, res) {
    try {
      const bus = await busService.getById(req.params.id);
      if (!bus) return res.status(404).json({ message: "Bus not found" });
      res.json(bus);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async create(req, res) {
    try {
      const bus = await busService.create(req.body);
      res.status(201).json(bus);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const bus = await busService.update(req.params.id, req.body);
      if (!bus) return res.status(404).json({ message: "Bus not found" });
      res.json(bus);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      const deleted = await busService.delete(req.params.id);
      if (!deleted) return res.status(404).json({ message: "Bus not found" });
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new BusController();
