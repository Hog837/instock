import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Inventory from './pages/inventory/Inventory';
import WareHouse from './pages/warehouse/WareHouse';
import './App.scss'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={WareHouse}/>
        <Route path="/inventory" component={Inventory}/>
        <Route path="/inventory/:id" component={Inventory}/>
        <Route path="/warehouse/:id" component={WareHouse}/>
      </Switch>
      </BrowserRouter>
    )
  }
}

