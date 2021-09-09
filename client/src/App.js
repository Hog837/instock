import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Inventory from "./pages/Inventory/Inventory";
import WareHouse from "./pages/WareHouse/WareHouse";
import WarehouseDetails from './components/WarehouseDetails/WarehouseDetails';
import "./App.scss";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
          <Switch>
            <Route path="/" exact component={WareHouse} />
            <Route path="/inventory" component={Inventory} />
            <Route path="/inventory/:id" component={Inventory} />
            <Route path="/warehouse/:id" component={WarehouseDetails} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
