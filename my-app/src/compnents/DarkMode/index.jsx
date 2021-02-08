import React from 'react';
import {Toggle} from './Toggle';
import './index.less';
import CommonTitle from '../Common/CommonTitle/index';
const DarkTitle = CommonTitle.DarkTitle

class DarkModeCmop extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="Dark-Mode">
                <Toggle />
                <div>
                    这是一些文字内容
                </div>
                <DarkTitle name={'li'} />
            </div>
        )
    }
}
export default DarkModeCmop