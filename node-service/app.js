const express = require("express");
const bodyParser = require("body-parser");

const busRoutes = require("./routes/busRoutes");
const driverRoutes = require("./routes/driverRoutes");
const monitorRoutes = require("./routes/monitorRoutes");
const studentRoutes = require("./routes/studentRoutes");
const parentRoutes = require("./routes/parentRoutes");
const authMiddleware = require('./middleware/authmiddleware');
const authRoutes = require ("./routes/authRoutes")
// Public routes
const app = express();
app.use(bodyParser.json());

app.use('/auth', authRoutes);
// Protected routes
app.use('/buses',  busRoutes);
app.use('/drivers',  driverRoutes);
app.use('/monitors',  monitorRoutes);
app.use('/students',  studentRoutes);
app.use('/parents', parentRoutes);


const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
