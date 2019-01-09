import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import daysVacation from './components/daysVacation/index';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
            <Route path ='/'     exact component={daysVacation}/>
          </Switch>
      </div>
    );
  }
}

export default App;
