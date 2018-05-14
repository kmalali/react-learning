import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import ContactUs from './ContactUs';

class App extends Component {
  render() {
    return (
        <Router>
            <div style={{margin: '20px'}}>
                <nav>
                    <Link to="/">Home</Link>
                    &nbsp;
                    <Link to="/contact">Contact</Link>
                </nav>
                <div>
                    <Route component={Home} path="/" exact />
                    <Route component={ContactUs} path="/contact" />
                </div>
            </div>
        </Router>
    );
  }
}

export default App;
