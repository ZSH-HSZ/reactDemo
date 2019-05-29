'useStrict'
import React, { Component } from 'react'
import AppState from '../../mobx'
import {info} from './data'
import { observable, computed}  from 'mobx'
import {observer} from "mobx-react";
@observer
export default class UserInfo extends React.Component {
  @computed get total() {
    return AppState.userNameText
  }
  constructor(props) {
    super(props);
    this.state = info
  }
  componentDidMount() {
    setTimeout(()=>{
      AppState.writeUser('do not know')
      console.log(AppState.userName)
    }, 3000)
  }
  render() {
    return (
      <div>
        <div>UserInfo</div>
        <div>11</div>
        <div>{this.state.name}</div>
        <div>22</div>
        <div>{AppState.userName}</div>
        <div>33</div>
        <div>{AppState.userNameText}</div>
        <div>{this.total}</div>
      </div>
    )
  }
}
