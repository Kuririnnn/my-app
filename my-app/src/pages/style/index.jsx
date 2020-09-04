import React from 'react';
import './index.less';
import { Link } from 'react-router-dom'

export default class extends React.Component {
    render() {
        return (
            <div className='button-style'>
                <div className="neon-btn">
                    <button className="btn one">Hover me</button>
                    <button className="btn two">Hover me</button>
                    <button className="btn three">Hover me</button>
                </div>
                <div className="draw-border">
                    <button>Hover me</button>
                </div>
                <div className="border-btn">
                    <button>Hover me</button>
                </div>
                <div className="frozen-btn">
                    <button class="green">Hover me</button>
                    <button class="purple">Hover me</button>
                </div>
                <div className="shiny-shadow">
                    <button><span>Hover me</span></button>
                </div>
                <div className="loading-btn">
                    <button><span>Hover me</span></button>
                </div>
                <Link className='back' to={window.config.prefix === '' ? '/' : window.config.prefix}>返回</Link>
            </div>
        )
    }
}