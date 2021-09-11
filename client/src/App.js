import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Inventory from "./pages/Inventory/Inventory";
import WareHouse from "./pages/WareHouse/WareHouse";
import "./App.scss";
import Header from "./components/Header/Header";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
import NewWarehouse from "./components/NewWarehouse/NewWarehouse";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import Footer from "./components/Footer/Footer";
import NewInventory from "./components/NewInventory/NewInventory";
import EditInventory from "./components/EditInventory/EditInventory";

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
            <Route path="/inventory" exact component={Inventory} />
            <Route path="/inventory/add" exact component={NewInventory} />
            <Route path="/inventory/:id" exact component={Inventory} /> 
            <Route path="/inventory/:id/edit" exact component={EditInventory} /> 
          </Switch>
          <Footer />
      </BrowserRouter>
    )
  }
}
export default App;
