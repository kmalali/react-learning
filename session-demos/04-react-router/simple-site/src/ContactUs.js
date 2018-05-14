import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

class ContactUs extends React.Component {
    render() {
        console.log( this );
        const { props: { match : { url } } } = this;
        return <div>
            <h1>Contact us</h1>
            <hr />
            <p>
                Reach out to us if you have a query.
            </p>
            <div>
                <Link to={url + '/phone'}>Phone</Link>
                <Link to={url + '/email'}>Email</Link>
            </div>
            <Switch>
                <Route path={url + '/phone'}  render={ () => (
                    <div>
                        Phone number: 944567890
                    </div>
                )} />
                <Route path={url + '/email'} exact render={ () => (
                    <div>
                        Email: support@harman.com
                    </div>
                )} />
            </Switch>
        </div>;
    }
}

export default ContactUs;