const express = require("express");
const router = express.Router();
const fs = require("fs");
const helperFunction = require("../Utills/Utills.js");
const { v4: uuid4 } = require("uuid");

router.get("/", (req, res) => {
  try {
    const inventoryData = helperFunction.readInventory();
    return res.status(200).send(inventoryData);
  } catch (err) {
    return res.status(500).json({ error: "File cannot be read" });
  }
});

router.get("/:id", (req, res) => {
  const inventoryList = helperFunction.readInventory();
  const foundData = inventoryList.find((item) => {
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
      id: uuid4(),
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
  } catch (error) {
    return res.status(500).send("The inventory cannot be added");
  }
});

router.delete("/:id", (req, res) => {
  try {
    let inventoryID = req.params.id;
    let inventoryData = helperFunction.readInventory();
    let toCheckWeHave = null;
    toCheckWeHave = inventoryData.find((data) => data.id === inventoryID);

    if (!toCheckWeHave) {
      return res
        .status(400)
        .send({ message: "no matching inventory item for this ID" });
    } else {
      inventoryData = inventoryData.filter(
        (data) => data.id !== inventoryID
      );
      helperFunction.writeInventory(inventoryData);
      return res.status(200).json(inventoryData);
    }
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ error: "inventory item couldn't be deleted : " + err });
  }
});


router.put("/:id", (req, res) => {
  let inventoryData = helperFunction.readInventory();
  const selectedInventoryId = req.params.id;
  const warehouseData = helperFunction.readWarehouse();
  const selectedWarehouseData = warehouseData.find(
    (warehouse) => warehouse.name === req.body.warehouseName
  );
  console.log(selectedWarehouseData)
  try {
    let editedInventory = {
      id: selectedInventoryId,
      warehouseID: selectedWarehouseData.id,
      warehouseName: req.body.warehouseName,
      itemName: req.body.itemName,
      description: req.body.description,
      category: req.body.category,
      status: req.body.status,
      quantity: req.body.quantity,
    };
    const validation = inventoryData.find(
      (data) => data.id === selectedInventoryId
    );
    if (!validation) {
      return res
        .status(404)
        .send("couldn't find the corresponding id in the inventory data");
    }


    const newData = inventoryData.map((selectedData) => {
      if (selectedData.id === selectedInventoryId) {
        return editedInventory;
      } else {
        return selectedData;
      }
    });
    helperFunction.writeInventory(newData);
    return res.status(200).json(newData);
  } catch (error) {
    return res.status(500).send("The inventory cannot be changed");
  }
});

module.exports = router;
