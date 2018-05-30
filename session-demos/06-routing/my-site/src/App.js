import React, { Component } from 'react';
import { Link, NavLink, Route, Switch } from 'react-router-dom';

import Home from './Home';
import About from './About';
import ContactUs from './ContactUs';

class App extends Component {
  render() {
    return (
        <div>
            <nav className="navbar navbar-inverse navbar-static-top" role="navigation">
                <div class="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="/">ITC Infotech</Link>
                    </div>
                
                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul className="nav navbar-nav">
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container">
                <Switch>
                    <Route path="/" exact={true} component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={ContactUs} />
                    <Route path="*" render={() => {
                        return (
                            <h1 className="text-center">Oops! We couldn't locate the page you were looking for</h1>
                        );
                    }} />
                </Switch>
            </div>
        </div>
    );
  }
}

export default App;
