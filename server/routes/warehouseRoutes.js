const express = require('express');
const router = express.Router();
const { v4: uuid4 } = require('uuid');
const helperFunction = require('../Utills/Utills.js');


router.delete("/:id", (req,res)=>{
    try{
    const warehouseID = req.params.id;
    const warehouseData = helperFunction.readWarehouse();
    const toCheckWeHave = warehouseData.find(
        (data) => data.id === warehouseID)

    if(toCheckWeHave){
        return res.status(400).string("no matching warehouse for this ID")
    } else {
        warehouseData = warehouseData.filter(
            (data) => data.id !== warehouseID);
        helperFunction.writeWarehouse(JSON.stringify(warehouseData));
        return res.status(200).json(warehouseData)
    }
} catch(err){
    return res.status(500).json({ error: "Warehouse data couldn't be deleted : " + err})
}
});



module.exports = router;