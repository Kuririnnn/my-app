import React from 'react';
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom'
import DarkModeComp from './../../compnents/DarkMode';
@inject((stores) => {
    return {
        time: stores.Header.time,
        startTask: stores.Header.startTask,
        userName: stores.Header.userName,
        getUserName: stores.Header.getUserName
    }
})
@observer
class DarkMode extends React.Component {
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <DarkModeComp />
                <Link to={window.config.prefix === '' ? '/' : window.config.prefix}>返回</Link>
            </div>
        )
    }
}
export default DarkMode