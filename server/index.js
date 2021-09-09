const express = require('express');
const app = express();
const PORT = 8080;
const cors= require('cors');
const inventoryRoutes= require('./routes/inventoryRoutes');
const warehouseRoutes= require('./routes/warehouseRoutes')

//built-in middleware for express
app.use(express.json());
app.use(cors());

// logs when there is an Incoming Request to the api in the console
app.use((_req, _res, next) => {
    console.log("Incoming Request");
    next();
});

app.use('/warehouse', warehouseRoutes);
app.use('/inventory',inventoryRoutes);

//listening on the port 8080
app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`)
})

