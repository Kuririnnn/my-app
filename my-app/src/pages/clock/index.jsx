import React from 'react';
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom'
import './index.less';
import Clock from './../../compnents/Clock';
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
            <div className="Clock">
                <header className="Clock-header">
                    <Clock />
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