import React from "react";
import Friend from './component/Friend/Friend';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Nomatch from './component/Error/Nomatch';
import Home from './component/Home/Home';
import FriendDetail from './component/FriendDetail/FriendDetail';
import Nav from './component/Nav/Nav';
function App() {
  return (
    <Router>
      <Nav></Nav>

      <Switch>
        <Route path="/friend">
          <Friend></Friend>
        </Route>
        <Route exact path="/" >
          <Home></Home>
        </Route>
        <Route path="/friend/:id">
          <FriendDetail></FriendDetail>
        </Route>
        <Route path="*">
          <Nomatch />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;


