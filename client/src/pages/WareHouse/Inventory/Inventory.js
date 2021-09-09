import React, { Component } from 'react'
import InventoryList from '../../../components/InventoryList/InventoryList'

export default class Inventory extends Component {
    state={
        items:[]

    }
    getList(){
        axios.get("http://localhost:8080/inventory")
        .then(response=>{
            this.setState({
                items:response.data
            })
        })
    }

    componentDidMount(){
        this.getList()
    }
    render() {
        return (
            <div>
                <InventoryList list={this.state.items}/>
                
            </div>
        )
    }
}
