const express = require("express");
const router = express.Router();
const { v4: uuid4 } = require("uuid");
const helperFunction = require("../Utills/Utills.js");

router.get("/", (_req, res) => {
  try {
    const list = helperFunction.readWarehouse();
    return res.status(200).json(list);
  } catch (err) {
    return res.status(500).json({ error: "File cannot be read." });
  }
});

router.get("/:id", (req, res) => {
  const viewWarehouse = helperFunction.readWarehouse();
  const selectedWarehouse = viewWarehouse.find((warehouse) => {
    return warehouse.id === req.params.id;
  });
  console.log(viewWarehouse);
  res.status(200).json(selectedWarehouse);
});

router.delete("/:id", (req, res) => {
  try {
    let warehouseID = req.params.id;
    let warehouseData = helperFunction.readWarehouse();
    let toCheckWeHave = null;
    toCheckWeHave = warehouseData.find((data) => data.id === warehouseID);

    if (!toCheckWeHave) {
      console.log(toCheckWeHave)
      return res.status(400).send({message:"no matching warehouse for this ID"});
    } else {
      warehouseData = warehouseData.filter((data) => data.id !== warehouseID);
      helperFunction.writeWarehouse(warehouseData);
      return res.status(200).json(warehouseData);
    }
  } catch (err) {
    return res
      .status(500)
      .json({ error: "Warehouse data couldn't be deleted : " + err });
  }
});

module.exports = router;
