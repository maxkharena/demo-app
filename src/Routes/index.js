// Absolute imports
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// Components
import Login from '../Components/Login';
import Home from '../Components/Home';
import About from '../Components/About';
import Page404 from '../Components/404';

const Routes = () => (
    <Switch>
        <Route exact path="/login">
            <Login />
        </Route>
        <Route exact path="/home/:userName">
            <Home />
        </Route>
        <Route exact path="/about">
            <About />
        </Route>
        <Route exact path="/404">
            <Page404 />
        </Route>
        <Redirect from="/" to="/home/max" />
        <Redirect from="*" to="/404" />
    </Switch>
);

export default Routes;