const express = require("express");
const router = express.Router();
const busController = require("../controllers/busController");

router.get("/", (req, res) => busController.getAll(req, res));
router.get("/:id", (req, res) => busController.getById(req, res));
router.post("/", (req, res) => busController.create(req, res));
router.put("/:id", (req, res) => busController.update(req, res));
router.delete("/:id", (req, res) => busController.delete(req, res));

module.exports = router;
