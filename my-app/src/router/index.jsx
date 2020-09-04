import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import React from 'react'
import Home from './../pages/home'
import Clock from './../pages/clock'
import Logo from './../pages/logo'
import Style from './../pages/style';
import Map from './../pages/map';


export default class extends React.Component {
    render() {
        const prefix = window.config.prefix === '' ? '/' : window.config.prefix;
        return (
            <Router>
                <Route exact component={Home} path={prefix} />
                <Route component={Clock} path={`${prefix}clock`} />
                <Route component={Logo} path={`${prefix}logo`} />
                <Route component={Style} path={`${prefix}style`} />
                <Route component={Map} path={`${prefix}map`} />
            </Router>
        )
    }
}
