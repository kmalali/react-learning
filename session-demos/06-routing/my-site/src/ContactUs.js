import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

export default class ContactUs extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <div>
                <h1>How to reach us</h1>
                <hr />
                <p>
                    Enim esse fugiat laboris veniam ullamco cupidatat. Minim ad dolor adipisicing do non aliquip labore pariatur. Excepteur ex excepteur qui velit occaecat. Velit pariatur ea ex fugiat deserunt consectetur ex consequat qui reprehenderit non ullamco non. Enim ipsum et est labore sit ullamco in eu ad excepteur deserunt id magna. Et et dolore elit elit consectetur ea elit. Deserunt mollit consequat aute minim ea et.
                </p>

                <br /><br/>
                <Link to={this.props.match.url + '/address' } style={{ marginRight: '20px' }}>Address</Link>
                <Link to={this.props.match.url + '/email' }>Email</Link>
                <br /><br/>

                <Switch>
                    <Route path={this.props.match.url} exact={true} render={() => <p>Something</p>} />
                    <Route path={this.props.match.url + '/address'} render={() => (
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                Address
                            </div>
                            <div className="panel-body">
                                No.18, Dodda Banaswadi Main Rd,
                                <br/>
                                Jeevanhalli, Maruthi Sevanagar,
                                <br />
                                Bengaluru, Karnataka 560005
                            </div>
                        </div>
                    )} />
                    <Route path={this.props.match.url + '/email'} render={() => (
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                Email
                            </div>
                            <div className="panel-body">
                                info@itcinfotech.com
                            </div>
                        </div>
                    )} />
                </Switch>
            </div>
        )
    }
}