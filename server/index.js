const express = require('express');
const app = express();
const cors = require('cors');
const inventoryRoutes = require('./routes/inventoryRoutes');
const warehouseRoutes = require('./routes/warehouseRoutes')
require('dotenv').config()
const PORT = process.env.PORT || 4000;

//built-in middleware for express
app.use(express.json());
app.use(cors());

app.use((_req, _res, next)=>{
    console.log('Incoming Request 🦅 ');
    next();
})

app.use('/inventory', inventoryRoutes);
app.use('/warehouse', warehouseRoutes);

//listening on the port 8080
app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`)
})

