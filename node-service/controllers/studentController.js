const studentService = require('../services/studentService');

async function getStudents(req, res) {
  try {
    const students = await studentService.getAllStudents();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function addStudent(req, res) {
  try {
    const student = await studentService.createStudent(req.body);
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { getStudents, addStudent };
