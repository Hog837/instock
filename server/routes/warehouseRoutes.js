const express = require("express");
const router = express.Router();
const uniqid = require("uniqid");
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

router.post("/", (req, res) => {
  try { 
    console.log(req.body.contact.email)
    let warehouse = helperFunction.readWarehouse();
    let newWarehouse = {
    id: uniqid(),
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    country: req.body.country,
    contact: {
      name: req.body.contact.name,
      position: req.body.contact.position,
      phone: req.body.contact.phone,
      email: req.body.contact.email
    }};
    warehouse.push(newWarehouse);
    helperFunction.writeWarehouse(warehouse);
    return res.status(200).json(newWarehouse);
    } catch(error) {
      console.log(error)
    return res.status(500).send("The warehouse cannot be added");
  }
});


module.exports = router;
