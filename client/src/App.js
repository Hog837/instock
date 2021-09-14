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
import InventoryDetails from "./components/InventoryDetails/InventoryDetails";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={WareHouse} />
          <Route path="/warehouse/add" exact component={NewWarehouse} />
          <Route
            path="/warehouse/:id"
            exact
            render={(routerProps) => <WarehouseDetails {...routerProps} />}
          />
          <Route
            path="/warehouse/:id/edit"
            exact
            render={(routerProps) => <EditWarehouse {...routerProps} />}
          />
          <Route path="/inventory" exact component={Inventory} />
          <Route path="/inventory/add" exact component={NewInventory} />
          <Route
            path="/inventory/:id"
            exact
            render={(routerProps) => <InventoryDetails {...routerProps} />}
          />
          <Route
            path="/inventory/:id/edit"
            exact
            render={(routerProps) => <EditInventory {...routerProps} />}
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}
export default App;