const express = require('express');
const router = express.Router();
const fs = require('fs');

const warehouseList='./data/warehouses.json';

const readList = () => {
    const fileContent = fs.readFileSync(warehouseList);
    const parsedFileContent = JSON.parse(fileContent);
    return parsedFileContent;
  }


router.get('/',(req, res)=>{
    try{
        const warehouseData=readList();
        return res.status(200).json(warehouseData);
    }catch (err){
        return res.status(500).json({error:"File cannot be read"})
    }
});

router.get("/:id", (req, res) => {
    const warehouseList=readList();
    const foundData = warehouseList.find(item => {
      return req.params.id === item.id;
    });
    if (!foundData) {
      res.status(404).send("Item not found");
    } else {
      res.send(foundData);
    }
  });

  module.exports = router;