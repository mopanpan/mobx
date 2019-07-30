import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { MapRoute } from '../routes/index'
import './global.scss';
import './font/iconfont.css';

@inject('loading')
@observer
class Index extends Component {
  componentDidMount() {
    console.log('home componentDidMount')
    //出现loading效果
    // this.props.loading.isLoading();

    // setInterval(() => {
    //   this.props.loading.changeLoading(!this.props.loading.isLoading);
    // }, 2000);

  }

  render() {
    return (
      <>
        <div className="main">
          <MapRoute route={this.props.route}></MapRoute>
        </div>
        <ul className="footer">
          <li><NavLink to="/home"><i className="iconfont icon-shouye"></i>首页</NavLink></li>
          <li><NavLink to="/specialtopic"><i className="iconfont icon-copy"></i>专题</NavLink></li>
          <li><NavLink to="/classify"><i className="iconfont icon-fenlei"></i>分类</NavLink></li>
          <li><NavLink to="/cart"><i className="iconfont icon-icon--"></i>购物车</NavLink></li>
          <li><NavLink to="/mine"><i className="iconfont icon-wode"></i>我的</NavLink></li>
        </ul>
      </>
    )
  }
}

export default Index
