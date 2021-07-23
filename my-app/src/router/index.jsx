import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React from 'react'
import Home from './../pages/home'
import Clock from './../pages/clock'
import Logo from './../pages/logo'
import Style from './../pages/style';
import Map from './../pages/map';
import DarkMode from './../pages/darkMode';
import Error from './../pages/error';
import Lazy from './../pages/lazy';
import Lifecycle from './../pages/lifecycle';


export default class extends React.Component {
    render() {
        const prefix = window.config.prefix === '' ? '/' : window.config.prefix;
        return (
            <Router>
                {/* <Route component={Home} path={prefix} /> */}
                <Home />
                <Switch>
                    <Route component={Clock} path={`${prefix}clock`} />
                    <Route component={Logo} path={`${prefix}logo`} />
                    <Route component={Style} path={`${prefix}style`} />
                    <Route component={Map} path={`${prefix}map`} />
                    <Route component={DarkMode} path={`${prefix}darkMode`} />
                    <Route component={Lazy} path={`${prefix}lazy`} />
                    <Route component={Lifecycle} path={`${prefix}lifecycle`} />
                    <Route component={Error} />
                </Switch>
            </Router>
        )
    }
}
