const express = require('express')
require("dotenv").config();
const busRoutes = require("./routes/busRoutes");

const app = express()
app.use(express.json());

app.use("/buses", busRoutes);

const port = process.env.PORT


app.listen(port,()=>{
    console.log(`server runnig in http://localhost:${port}`)
})