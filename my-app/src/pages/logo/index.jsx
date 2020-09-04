import React from 'react';
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom'
import logo from './../../static/img/kuririn192.png';
import './index.less';
@inject((stores) => {
    return {
        time: stores.Header.time,
        startTask: stores.Header.startTask,
        userName: stores.Header.userName,
        getUserName: stores.Header.getUserName
    }
})
@observer
class Layout extends React.Component {
    componentDidMount() {
        const { startTask, getUserName } = this.props;
        startTask();
        getUserName();
    }
    render() {
        const { time, userName } = this.props;
        return (
            <div className="Logo">
                <header className="Logo-header">
                    <img src={logo} className="Logo-logo" alt="logo" />
                    <p>
                        {time}
                    </p>
                    <p>
                        {userName}
                    </p>
                    <Link to={window.config.prefix === '' ? '/' : window.config.prefix}>返回</Link>
                </header>
            </div>
        )
    }
}
export default Layout