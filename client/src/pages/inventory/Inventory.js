import React, { Component } from 'react'
import InventoryList from '../../components/InventoryList/InventoryList';
import axios from 'axios';


export default class Inventory extends Component {
    state={
        items:[]
    }

    getItems(){
        axios.get('http://localhost:8080/inventory')
        .then(response=>{
            this.setState({
                items:response.data
            })
        })
    }
    componentDidMount() {
        this.getItems();
      }
      
    render() {
        return (
            <div>
                <InventoryList lists={this.state.items}/>
                
            </div>
        )
    }
}
