import React from 'react';
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom'
import './index.less';
import Clock from './../../compnents/Clock';
import Hoc from './../../compnents/Hoc';

//子组件（通过forwardRef方法创建）
const Child = React.forwardRef((props, ref) => (
    <input ref={ref} />
));

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
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.myRef1 = React.createRef();
        this.myRef2 = React.createRef();
    }
    componentDidMount() {
        const { startTask, getUserName } = this.props;
        startTask();
        getUserName();
        console.log(this.myRef);
        console.log(this.myRef1);
        console.log(this.myRef2);
        this.myRef2.current.focus();
    }
    render() {
        const { time, userName } = this.props;
        return (
            <div className="Clock">
                <header className="Clock-header">
                    <Clock ref={this.myRef} />
                    <p>
                        {time}
                    </p>
                    <p>
                        {userName}
                    </p>
                    <Child ref={this.myRef2}/>
                    <Hoc />
                    <Link ref={this.myRef1} to={window.config.prefix === '' ? '/' : window.config.prefix}>返回</Link>
                </header>
            </div>
        )
    }
}
export default Layout