const express = require('express');
const app = express();
const PORT = 8080;
const cors= require('cors');
const inventoryRoutes= require('./routes/inventory');
const warehouseRoutes= require('./routes/warehouse')

//built-in middleware for express
app.use(express.json());
app.use(cors());


app.use('/inventory', warehouseRoutes);
app.use('/warehouse',inventoryRoutes);

//listening on the port 8080
app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`)
})

