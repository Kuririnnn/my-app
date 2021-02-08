import React from 'react';
class Test extends React.Component {
    constructor(props){
        super(props)
        this.count = props.count
        this.state={}
    }

    shouldComponentUpdate(nextProps) {
        console.log(`shouldComponentUpdate ${nextProps.count}, ${this.count}`);
        if(nextProps.count < 10){
            return false;
        }
        return true;
    }
    componentWillReceiveProps(nextProps){
        console.log(`shouldComponentUpdate ${nextProps.count}, ${this.count}`);
        if(this.count !== nextProps.count){
            this.count = nextProps.count;
        }
    }
    render() {
        console.log(`Test 组件 render, count:${this.count}`);
        return (
            <div>
                
            </div>
        )
    }
}
export default Test