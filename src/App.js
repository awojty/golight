import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Contact from "./pages/Contact"
import HomePage from "./pages/HomePage"
import Offer from "./pages/Offer"

export default class App extends Component {
  render(){
    return (
    <>
      <Router>
        <Switch>
          <Route path="/onas">
            <HomePage />
          </Route>
          <Route path="/uslugi">
            <Offer />
          </Route>
          <Route path="/kontakt">
            <Contact />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
    </Router>

    </>
  );}
}

// export default App;
