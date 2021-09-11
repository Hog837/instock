const express = require('express');
const router = express.Router();
const fs = require('fs');
const helperFunction = require("../Utills/Utills.js");




router.get('/',(req, res)=>{
    try{
        const inventoryData=helperFunction.readInventory();
        return res.status(200).send(inventoryData);
    }catch (err){
        return res.status(500).json({error:"File cannot be read"})
    }
});

router.get("/:id", (req, res) => {
    const inventoryList=helperFunction.readInventory();
    const foundData = inventoryList.find(item => {
      return req.params.id === item.id;
    });
    if (!foundData) {
      res.status(404).send("Item not found");
    } else {
      res.send(foundData);
    }
  });

  router.delete("/:id", (req, res) => {
    try {
      let inventoryID = req.params.id;
      let inventoryData = helperFunction.readWarehouse();
      let toCheckWeHave = null;
      toCheckWeHave = warehouseData.find((data) => data.id === warehouseID);
  
      if (!toCheckWeHave) {
        console.log(toCheckWeHave)
        return res.status(400).send({message:"no matching warehouse for this ID"});
      } else {
        inventoryData = inventoryData.filter((data) => data.id !== inventoryID);
        helperFunction.writeWarehouse(inventoryData);
        return res.status(200).json(inventoryData);
      }
    } catch (err) {
      return res
        .status(500)
        .json({ error: "inventory couldn't be deleted : " + err });
    }
  });

module.exports = router;