import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Header from './Components/Header.js';
import Dashboard from './Components/Dashboard.js';
import Form from './Components/Form.js';
import Edit from './Components/Edit.js';
import './App.css';


class App extends Component {
  constructor(){
    super()

    this.state={
      selfie:[],

    }
  }
  render() {
    return (
      <div className="App">
      <HashRouter>
        <div>
          <Header/>
          <hr/>
          <Switch>
            <Route component={Dashboard} path='/' exact />
            <Route component={Form} path='/form' />
            <Route component={Edit} path='/item/:id'/>
          </Switch>
        </div>
      </HashRouter>
      </div>
    );
  }
}

export default App;
