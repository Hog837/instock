import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Inventory from "./pages/Inventory/Inventory";
import WareHouse from "./pages/WareHouse/WareHouse";
import "./App.scss";
import Header from "./components/Header/Header";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
import NewWarehouse from "./components/NewWarehouse/NewWarehouse";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
          <Switch>
            <Route path="/" exact component={WareHouse} />
            <Route path="/warehouse/add" exact component={NewWarehouse} />
            <Route path="/warehouse/:id" exact component={WarehouseDetails} />
            <Route path="/warehouse/:id/edit" component={EditWarehouse} />
            <Route path="/inventory" component={Inventory} />
            <Route path="/inventory/:id" component={Inventory} />
          </Switch>
      </BrowserRouter>
    )
  }
}
export default App;
