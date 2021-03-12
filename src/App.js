import React, { useState } from "react";
import Friend from './component/Friend/Friend';
import Nomatch from './component/Error/Nomatch';
import Home from './component/Home/Home';
import FriendDetail from './component/FriendDetail/FriendDetail';
import Nav from './component/Nav/Nav';
import './App.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Countries from "./component/Countries/Countries";


function App() {
 

  return (

      <Router>
        <Nav></Nav>
        <Switch>
          <Route path="/friend/:id">
            <FriendDetail></FriendDetail>
          </Route>
          <Route path="/friend">
            <Friend></Friend>
          </Route>
          <Route path="/country">
            <Countries></Countries>
          </Route>
          <Route exact path="/" >
            <Home></Home>
          </Route>
          <Route path="*">
            <Nomatch />
          </Route>
        </Switch>
      </Router>
    );



}

export default App;


