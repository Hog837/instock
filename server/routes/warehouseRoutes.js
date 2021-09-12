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

router.put("/:id", (req, res) => {
  let data = helperFunction.readWarehouse();
  const selectedId = req.params.id;
  try { 
    let edditedWarehouse = {
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
    const validation = data.find((data)=> data.id === selectedId);
    if (!validation){
      return res.status(404).send("didnt find the id in the array")
    }
    const newData = data.map((selectedData) =>{
      if(selectedData.id === selectedId){
        return edditedWarehouse
      } else{
        return selectedData
      }
    })
    helperFunction.writeWarehouse(newData);
    return res.status(200).json(newData);
    } catch(error) {
      console.log(error)
    return res.status(500).send("The warehouse cannot be changed");
  }
});

module.exports = router;
