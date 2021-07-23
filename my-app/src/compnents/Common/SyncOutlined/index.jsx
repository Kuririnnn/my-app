import React from 'react'
import './index.less';
import LoadingImg from './../img/loading.png';

function Loading(props) {
	return (
		<div className="Loading">
			<img className="Loading-img" src={LoadingImg} />
		</div>
	)
}

export default {
	Loading
}