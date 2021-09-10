import React, { useEffect, useState } from 'react'
import InventoryList from '../../components/InventoryList/InventoryList';
import axios from 'axios'

 const Inventory =()=> {
   const [data,setData]=useState([])

    const getItems=()=>{
        axios.get('http://localhost:8080/inventory')
        .then(response=>{
            setData(
            response.data
            )
        })
    }
    useEffect(()=>{
        getItems()
    }, [])
   

        return (
            <div>
                <InventoryList lists={data}/>
            </div>
        )
}


export default Inventory;
