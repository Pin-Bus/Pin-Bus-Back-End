const authService = require('../services/authService');

// POST /auth/login
async function login(req, res) {
  try {
    const { email, password } = req.body;
    const { token, user } = await authService.login(email, password);

    res.json({ token, user });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
}

module.exports = { login };
