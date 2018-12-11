import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Intro from "./containers/Intro/Intro";
import Navbar from "./components/Navbar";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";

import "./App.css";

const Payment = () => <h2>Join Payment</h2>;
const FAQ = () => <h2>FAQ</h2>;
const Links = () => <h2>Links</h2>;
const Contact = () => <h2>Contact</h2>;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showContent: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({showContent: true});
    }, 3000);
  }

  render() {
    return (
      <Router>
        <div className="app-body">
          {!this.state.showContent && <Intro />}
          <Navbar />

          { this.state.showContent &&
            <div className="app-content">
              <Route path="/" exact component={Home} />
              <Route path="/about/" component={About} />
              <Route path="/join/" component={Payment} />
              <Route path="/faq/" component={FAQ} />
              <Route path="/links/" component={Links} />
              <Route path="/contact/" component={Contact} />
            </div>
          }
        </div>
      </Router>
    )
  }
}

export default App;
