import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./component/Header";
import HomePage from "./component/HomePage";
import CheckOut from "./component/CheckOut";
import Login from "./component/Login";
import { auth } from "./component/firebase";
import { useStateValue } from "./component/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is >>", authUser);

      if (authUser) {
        // the user just log in or already logged in user.
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    // no value in dependency array means it will load only once when component loads.
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <CheckOut />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
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
