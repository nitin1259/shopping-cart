import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./component/Header";
import HomePage from "./component/HomePage";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout"> Checkout</Route>
          <Route path="/login"> Login page</Route>
          <Route path="/">
            <Header />
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
