const express = require("express");
const router = express.Router();
const fs = require("fs");

const warehouseListFilePath = "./data/warehouses.json";

const warehouseList = () => {
  const viewList = fs.readFileSync(warehouseListFilePath);
  const parsedWarehouseList = JSON.parse(viewList);
  return parsedWarehouseList;
};
router.get("/", (_req, res) => {
  try {
    const list = warehouseList();
    return res.status(200).json(list);
  } catch (err) {
    return res.status(500).json({ error: "File cannot be read." });
  }
});
router.get("/:id", (req, res) => {
  const viewWarehouse = warehouseList();
  const selectedWarehouse = viewWarehouse.find((warehouse) => {
    return warehouse.id === req.params.id;
  });
  console.log(viewWarehouse);
  res.status(200).json(selectedWarehouse);
});
module.exports = router;