const express = require('express');
const router = express.Router();
const fs = require('fs');
const helperFunction = require("../Utills/Utills.js");
const uniqid = require("uniqid");




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
  router.post("/", (req, res) => {
    try { 
      let inventory = helperFunction.readInventory();
      let newInventory = {
      id: uniqid(),
      wareHouseID: "90ac3319-70d1-4a51-b91d-ba6c2464408c",
      warehouseName: req.body.warehouseName,
      itemName: req.body.itemName,
      description: req.body.description,
      category: req.body.category,
      status: req.body.status,
      quantity: req.body.quantity,
      };
      inventory.push(newInventory);
      helperFunction.writeInventory(inventory);
      return res.status(200).json(newInventory);
      } catch(error) {
        console.log(error)
      return res.status(500).send("The inventory cannot be added");
    }
  });


module.exports = router;