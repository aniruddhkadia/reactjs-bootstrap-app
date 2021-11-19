import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import $ from 'jquery';
// import Popper from 'popper.js';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import { Route, Switch } from "react-router";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
//import { Switch, Route } from "react-router-app";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/service' component={Service} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
