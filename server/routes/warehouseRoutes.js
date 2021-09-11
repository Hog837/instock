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
    const warehouseID = req.params.id;
    const warehouseData = helperFunction.readWarehouse();
    const toCheckWeHave = warehouseData.find((data) => data.id === warehouseID);

    if (toCheckWeHave) {
      return res.status(400).string("no matching warehouse for this ID");
    } else {
      warehouseData = warehouseData.filter((data) => data.id !== warehouseID);
      helperFunction.writeWarehouse(JSON.stringify(warehouseData));
      return res.status(200).json(warehouseData);
    }
  } catch (err) {
    return res
      .status(500)
      .json({ error: "Warehouse data couldn't be deleted : " + err });
  }
});

router.put("/", (req, res) => {
  const editWarehouse ={
    "id": req.body.id,
    "name": req.body.id,
    "address": req.body.id,
    "city": req.body.id,
    "country": req.body.id,
    "contact": {
      "name": req.body.contact.name,
      "position": req.body.contact.position,
      "phone": req.body.contact.phone,
      "email": req.body.contact.email
      }
    }
  const edditedWarehouse = writeWarehouse();
  edditedWarehouse

})

module.exports = router;
