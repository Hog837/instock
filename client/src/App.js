import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Inventory from "./pages/inventory/Inventory";
import WareHouse from "./pages/WareHouse/WareHouse";
import "./App.scss";
import Header from "./components/Header/Header";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
          <Switch>
            <Route path="/" exact component={WareHouse} />
            <Route path="/inventory" component={Inventory} />
            <Route path="/inventory/:id" component={Inventory} />
            <Route path="/warehouse/:id" exact component={WareHouse} />
            <Route path="/warehouse/:id/edit" component={EditWarehouse} />
          </Switch>
      </BrowserRouter>
    )
  }
}
 
export default App;
