import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={}/>
        <Route path="/inventory" component={}/>
        <Route path="/inventory/:id" component={}/>
        <Route path="/warehouse/:id" component={}/>
      </Switch>
      </BrowserRouter>
    )
  }
}

export default App;