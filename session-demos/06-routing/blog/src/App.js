import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Master from './Master';
import Detail from './Detail';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <div class="row">
                        <div class="col-sm-3">
                            <h2>Recent articles</h2>
                            <Master />
                        </div>
                        <div class="col-sm-9">
                            <Route path="/" exact render={() => {
                                return (
                                    <div>
                                        <h1>
                                            Stadium
                                            <br />
                                            <small>A place to share your ideas</small>
                                        </h1>
                                    </div>
                                )
                            }} />
                            <Route path="/posts/:postId" component={Detail} />
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}