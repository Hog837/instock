import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Inventory from './pages/inventory/Inventory';
import WareHouse from './pages/WareHouse/WareHouse';
import './App.scss'
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <BrowserRouter className="app">
      <Header />
      <Switch>
        <Route path="/" exact component={WareHouse}/>
        <Route path="/inventory" component={Inventory}/>
        <Route path="/inventory/:id" component={Inventory}/>
        <Route path="/warehouse/:id" component={WareHouse}/>
      </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
