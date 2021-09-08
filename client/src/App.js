import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import WarehouseList from './components/WarehouseList/WarehouseList';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={WarehouseList}/>
        <Route path="/inventory" component={App}/>
        <Route path="/inventory/:id" component={App}/>
        <Route path="/warehouse/:id" component={App}/>
      </Switch>
      </BrowserRouter>
    )
  }
}

export default App;