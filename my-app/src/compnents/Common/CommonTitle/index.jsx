import React from 'react'
import './index.less';

function DarkTitle(props) {
	return (
		<div className="DarkTitle">
			<h1>Hello, {props.name}</h1>
		</div>
	)
}

function DarkTitle2(props) {
	return (
		<div>
			<h1>Hello, {props.name}</h1>
		</div>
	)
}

export default {
	DarkTitle,
	DarkTitle2
}