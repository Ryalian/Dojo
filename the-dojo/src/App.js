import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Intro from "./containers/Intro/Intro";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Membership from "./containers/Membership/Membership";
import Schedule from "./containers/Schedule/Schedule";
import Contact from "./containers/Contact/Contact";

import ContentSection from "./HOC/ContentSectionHOC";

import "./App.css";

const News = () => <h2>Coming Soon</h2>;

class App extends Component {
  constructor(props) {
    super(props);

  }
  
  render() {
    return (
      <Router>
        <div className="app-body">
          { ContentSection(Navbar) }

          <div className="app-content">
            <Route path="/" exact component={Home} />
            <Route path="/news" exact component={Home} />
            <Route path="/about/" component={About} />
            <Route path="/membership/" component={Membership} />
            <Route path="/schedule/" component={Schedule} />
            <Route path="/news/" component={News} />
            <Route path="/contact/" component={Contact} />
          </div>

          { ContentSection(Footer) }
        </div>
      </Router>
    )
  }
}

export default App;
