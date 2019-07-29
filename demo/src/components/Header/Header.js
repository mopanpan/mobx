import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './header.scss'
class Header extends Component {
    render() { 
        //   console.log(this.props)
        return (
            <div className="header">
                <span className="left" onClick={() => { this.props.history.go(-1) }}>{'<'}</span>
                <span>{this.props.title}</span>
                <span className="right"></span>
            </div>
        )
    }
}

export default withRouter(Header);
