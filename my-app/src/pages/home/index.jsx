import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import './index.less';
import Test from './../../compnents/Test';
export default class extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count : 1
        }
    }
    componentDidMount(){
        setInterval(() => {
            this.test();
        }, 3000);
    }
    test = () =>{
        this.setState({
            count: this.state.count + 1
        });
    }
    render() {
        console.log(`home render,count:${this.state.count}`);
        const prefix = window.config.prefix === '' ? '/' : window.config.prefix;
        return (
            <div className="Home">
                <header className="Home-header">
                    <NavLink to={`${prefix}clock`}>时钟</NavLink>
                    <NavLink to={`${prefix}logo`}>标志</NavLink>
                    <NavLink to={`${prefix}style`}>样式</NavLink>
                    <NavLink to={`${prefix}map`}>地图</NavLink>
                    <NavLink to={`${prefix}darkMode`}>深色样式</NavLink>
                    <NavLink to={`${prefix}react`} activeClassName='active'>404</NavLink>
                </header>
                {/* <div className="welcome">
                    welcome
                </div> */}
                {/* <Test count={this.state.count}/> */}
            </div>
        )
    }
}