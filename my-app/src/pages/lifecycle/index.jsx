import React from 'react';
import Child from './child';

Child.saySomething();

export default class LifecycleParent extends React.Component {
    state = {
        showChild: false,
        childCount: 0
    }

    constructor(props) {
        super(props)
        console.log('LifecycleParent constructor');
        console.log(props);
    }

    componentDidMount(props, state) {
        console.log('LifecycleParent componentDidMount');
        console.log(props);
        console.log(state);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('LifecycleParent getDerivedStateFromProps');
        console.log(nextProps);
        console.log(prevState);
        return null;
    }

    shouldComponentUpdate(props, state) {
        console.log('LifecycleParent shouldComponentUpdate');
        console.log(props);
        console.log(state);
        return true;
    }

    componentDidUpdate(props, state) {
        console.log('LifecycleParent componentDidUpdate');
        console.log(props);
        console.log(state);
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleParent getSnapshotBeforeUpdate');
        console.log(prevProps);
        console.log(prevState);
        return null;
    }

    componentWillUnmount(props, state) {
        console.log('LifecycleParent componentWillUnmount');
        console.log(props);
        console.log(state);
    }

    changeChild = () => {
        const { showChild } = this.state;
        this.setState({
            showChild: !showChild
        });
    }

    addChildCount = () => {
        this.setState({
            childCount: this.state.childCount + 1
        });
    }

    render() {
        const { showChild, childCount } = this.state;
        return <div>
            <h1>Parent Component</h1>
            <button onClick={this.changeChild}>{`${showChild ? '卸载' : '挂载'}Child Component`}</button>
            {
                showChild ?
                    [
                        <button key='button-add-child-count' onClick={this.addChildCount}>Add Child Count</button>,
                        <Child key='child' propsCount={0} />
                    ] : null
            }
        </div>
    }
}