import React from "react";
import { useState } from "react";
import "./App.css";
import Rule from "./rules/Rule";
import Welcome from "./welcome/Welcome";
import Test1 from "./tests/Test1";
import Test2 from "./tests/Test2";
import Test3 from "./tests/Test3";
import Test4 from "./tests/Test4";
import Test5 from "./tests/Test5";
import Test6 from "./tests/Test6";
import Test7 from "./tests/Test7";
import Result1 from "./result/Result1";
import Result2 from "./result/Result2";
import Result3 from "./result/Result3";
import Result4 from "./result/Result4";
import Result5 from "./result/Result5";
import Result6 from "./result/Result6";
import Result7 from "./result/Result7";
import Result8 from "./result/Result8";
import Navbar from "./components/Navbar";
import Confirm from "./tests/Confirm";
import Viewres from "./viewres/Viewres";
import LoginPage from "./Login/LoginPage";
import RegisterPage from "./Register/RegisterPage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/viewres" component={Viewres} />
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/rules" component={Rule} />
          <Route exact path="/confirm" component={Confirm} />
          <Route exact path="/test1" component={Test1} />
          <Route exact path="/test2" component={Test2} />
          <Route exact path="/test3" component={Test3} />
          <Route exact path="/test4" component={Test4} />
          <Route exact path="/test5" component={Test5} />
          <Route exact path="/test6" component={Test6} />
          <Route exact path="/test7" component={Test7} />
          <Route exact path="/result1" component={Result1} />
          <Route exact path="/result2" component={Result2} />
          <Route exact path="/result3" component={Result3} />
          <Route exact path="/result4" component={Result4} />
          <Route exact path="/result5" component={Result5} />
          <Route exact path="/result6" component={Result6} />
          <Route exact path="/result7" component={Result7} />
          <Route exact path="/result8" component={Result8} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;


