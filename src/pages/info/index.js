'useStrict'
import React, { Component } from 'react'
import AppState from '../../mobx'
import {info} from './data'
import { observable, computed}  from 'mobx-react'
export default class UserInfo extends React.Component {
  @computed name() {
    // 正确的; 计算属性会追踪 `user.name` 属性
    return this.props.AppState.userName
  }
  constructor(props) {
    super(props);
    this.state = info
  }
  componentDidMount() {
    AppState.writeUser('do not know')
  }
  render() {
    return (
      <div>
        <div>UserInfo</div>
        <div>11</div>
        <div>{this.state.name}</div>
        <div>22</div>
        <div>{this.name}</div>
        <div>33</div>
        <div>{AppState.userNameText}</div>
      </div>
    )
  }
}
