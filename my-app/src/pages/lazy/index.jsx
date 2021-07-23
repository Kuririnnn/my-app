import React from 'react';
import { Link } from 'react-router-dom'
import Lazy from './../../compnents/Lazy';
import SyncOutlined from './../../compnents/Common/SyncOutlined/index';
const Loading = SyncOutlined.Loading;
const LazyComponent = React.lazy(() => new Promise((resolve) => {
    setTimeout(() => {
        resolve({
            default: () => <Lazy />
        })
    }, 2000)
}))
export default class index extends React.Component {
    render() {
        return <div className="context_box" style={{ marginTop: '50px' }}   >
            <React.Suspense fallback={<div className="icon" ><Loading /></div>} >
                <LazyComponent />
            </React.Suspense>

            <Link ref={this.myRef1} to={window.config.prefix === '' ? '/' : window.config.prefix}>返回</Link>
        </div>
    }
}