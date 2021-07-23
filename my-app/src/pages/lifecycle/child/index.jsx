import React from 'react';

export default class LifecycleChild extends React.Component {
    state = {
        count: 0
    }

    constructor(props) {
        super(props)
        console.log('LifecycleChild constructor');
        console.log(props);
    }

    componentDidMount(props, state) {
        console.log('LifecycleChild componentDidMount');
        console.log(props);
        console.log(state);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('LifecycleChild getDerivedStateFromProps');
        console.log(nextProps);
        console.log(prevState);
        if (prevState.count > nextProps.propsCount) {
            return {
                count: prevState.count
            };
        } else {
            return {
                count: nextProps.propsCount
            };

        }
    }

    shouldComponentUpdate(props, state) {
        console.log('LifecycleChild shouldComponentUpdate');
        console.log(props);
        console.log(state);
        return true;
    }

    componentDidUpdate(props, state) {
        console.log('LifecycleChild componentDidUpdate');
        console.log(props);
        console.log(state);
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleChild getSnapshotBeforeUpdate');
        console.log(prevProps);
        console.log(prevState);
        return null;
    }

    componentWillUnmount(props, state) {
        console.log('LifecycleChild componentWillUnmount');
        console.log(props);
        console.log(state);
    }

    addCount = () => {
        this.setState(this.addCountHandler)
    }

    addCountHandler = () => {
        return {
            count: this.state.count + 1
        }
    }

    static saySomething = () => {
        console.log('saySomething');
    }

    render() {
        console.log('LifecycleChild render');
        const { count } = this.state;
        return <div>
            <h2>Child Component</h2>
            <h3>{`Count: ${count}`}</h3>
            <button onClick={this.addCount}>add count</button>
        </div>
    }
}