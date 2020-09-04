import React from 'react';
import { Provider } from 'mobx-react';
import store from './store';
import Router from './router';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    
  }
  render() {
    return (
      <Provider {...store}>
        <Router />
      </Provider>
    )
  }
}
