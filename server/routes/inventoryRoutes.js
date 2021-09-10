const express = require('express');
const router = express.Router();
const fs = require('fs');

const inventoryList='./data/inventories.json';

const readList = () => {
    const fileContent = fs.readFileSync(inventoryList);
    const parsedFileContent = JSON.parse(fileContent);
    return parsedFileContent;
  }


router.get('/',(req, res)=>{
    try{
        const inventoryData=readList();
        return res.status(200).send(inventoryData);
    }catch (err){
        return res.status(500).json({error:"File cannot be read"})
    }
});

router.get("/:id", (req, res) => {
    const inventoryList=readList();
    const foundData = inventoryList.find(item => {
      return req.params.id === item.id;
    });
    if (!foundData) {
      res.status(404).send("Item not found");
    } else {
      res.send(foundData);
    }
  });


module.exports = router;