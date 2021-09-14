const fs = require("fs");
const warehouseFilePath = "./data/warehouses.json";
const inventoryFilePath = "./data/inventories.json";

const readWarehouse = () => {
  const fileContent = fs.readFileSync(warehouseFilePath);
  const parsedFileContent = JSON.parse(fileContent);
  return parsedFileContent;
};
const writeWarehouse = (newData) => {
  fs.writeFileSync(warehouseFilePath, JSON.stringify(newData));
};
const readInventory = () => {
  const fileContent = fs.readFileSync(inventoryFilePath);
  const parsedFileContent = JSON.parse(fileContent);
  return parsedFileContent;
};
const writeInventory = (newData) => {
  fs.writeFileSync(inventoryFilePath, JSON.stringify(newData));
};
module.exports = {
  readWarehouse,
  writeWarehouse,
  readInventory,
  writeInventory,
};