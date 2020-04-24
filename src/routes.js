import React from 'react';
import { Switch, Route } from 'react-router';
import Details from './components/Details';
import Home from './Home';;

function Routes() {

    return (
        <Switch>
            <Route path="/details" component={Details} />
            <Route path="/" component={Home} />
        </Switch>
    )
}

export default Routes;