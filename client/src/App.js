import React, { Component } from "react";
// import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "./App.css";
import Main from "./Pages/Main";
import NoMatch from "./Pages/NoMatch";
import Nav from "./components/Nav";
class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />      
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
