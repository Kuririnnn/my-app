import React from 'react';
import { Link } from 'react-router-dom'
import './index.less';
export default class extends React.Component {
    render() {
        const prefix = window.config.prefix === '' ? '/' : window.config.prefix;
        return (
            <div className="Home">
                <header className="Home-header">
                    <Link to={`${prefix}clock`}>时钟</Link>
                    <Link to={`${prefix}logo`}>标志</Link>
                    <Link to={`${prefix}style`}>样式</Link>
                </header>
            </div>
        )
    }
}