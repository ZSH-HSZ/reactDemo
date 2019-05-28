import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Index extends Component {
  render() {
    return (
      <div>
        <Link to="/login">login</Link>
        <br/>
        <Link to="/info">info</Link>
      </div>
    )
  }
}
