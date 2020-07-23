import React, { Component } from "react";
import Navbar from "./components/Navbar";
import "./styles.css";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./components/page/Home";
import About from "./components/page/About";
import Contact from "./components/page/Contact";
import Projects from "./components/page/Projects";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Projects" component={Projects} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
