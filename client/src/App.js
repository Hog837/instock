import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import WarehouseDetails from './components/WarehouseDetails/WarehouseDetails';
import WarehouseList from './components/WarehouseList/WarehouseList';
import "./App.scss";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={WarehouseList}/>
        {/* <Route path="/inventory" component={App}/>
        <Route path="/inventory/:id" component={App}/> */}
        <Route path="/warehouse/:id" component={WarehouseDetails}/>
      </Switch>
      </BrowserRouter>
    )
  }
}

export default App;