import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './index.css';
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readOnly: true
    }
  }
  setReadOnly() {
    // this.setState({
    //   readOnly: true
    // })
  }
  componentDidMount() {
    console.log(this.props)
    setTimeout(()=>{
      this.props.history.push('/info')
    }, 2000)
  }
  render() {
    return (
      <div className="flex">
        <input type="text"/>
        <input type="password" readOnly={this.state.readOnly} onFocus={()=>{this.setReadOnly()}} />
        <Link to="/info">info</Link>
        <Link to="/login">login</Link>
        <br/>
      </div>
    )
  }
}
