import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./header";
import FirstPage from "./firstPage";
import FinalPage from "./finalPage";

class Plexus extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className="container">
            <Route exact path="/" component={FirstPage} />
            <Route path="/final" component={FinalPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default Plexus;
