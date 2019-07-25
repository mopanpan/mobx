import React, { Component } from 'react'
import {Route,NavLink,Switch} from 'react-router-dom'
// import styles from './index.scss';
import {MapRoute} from '../routes/index'
import './index.scss'
export class Index extends Component {
  render() {
    return (
      <>
             <div className="header">

             </div>
             <div className="main">
               <MapRoute route={this.props.route}></MapRoute>

             </div>
             <ul className="footer">
               <li><NavLink to="/home">首页</NavLink></li>
               <li><NavLink to="/specialtopic">专题</NavLink></li>
               <li><NavLink to="/classify">分类</NavLink></li>
               <li><NavLink to="/cart">购物车</NavLink></li>
               <li><NavLink to="/mine">我的</NavLink></li>
             </ul>
      </>
    )
  }
}

export default Index
