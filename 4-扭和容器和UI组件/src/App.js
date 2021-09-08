import React, { Component } from 'react'
import Count from './containers/Count'
// 在index.js中用Provider传store
// import store from './redux/store'
export default class App extends Component {
  render() {
    return (
      <div>
        App...
        <Count/>
      </div>
    )
  }
}

