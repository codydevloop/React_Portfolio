import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Portfolio from "./components/Portfolio/Portfolio";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      {/* <div className="App">
        <Nav />
        <Header />
        <Footer />
      </div> */}

      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/Portfolio" component={Portfolio} />
        </div>
      </Router>
    </>
  );
}

export default App;
