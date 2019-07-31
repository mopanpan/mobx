import React, { Component } from 'react'
import './msgHeader.scss';
import { withRouter } from 'react-router-dom'
class MsgHeader extends Component {
  render() {
    return (
      <div className="msgHeader">
        <span className="left" onClick={() => { this.props.history.go(-1) }}>{'<'}</span>
        <span>{this.props.title}</span>
        <span className="right"></span>
      </div>
    )
  }
}

export default withRouter(MsgHeader)
