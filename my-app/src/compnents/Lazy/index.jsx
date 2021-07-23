import React from 'react';
import soundFragment from './img/sound-fragment.jpg';
import './index.less';

export default class Test extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log('--componentDidMount--')
    }
    render(){
        return <div>
            <img src={soundFragment}  className="soundFragment" />
        </div>
    }
}