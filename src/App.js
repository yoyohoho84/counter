import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from "./HomePage/index";


class App extends Component {

  render() {
    return (
        <BrowserRouter basename="/">
          <Switch>
            <Route path="/" component={HomePage} exact/>
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;