import React, { Component } from 'react'
import './Mine.scss';
import '@/pages/font/iconfont.css';
class Mine extends Component {
  render() {
    return (
     
        <div className="tabPageContent">
          <div id="minePage">
            <div className="userMsgWrap">
              <div className="userLogo">

              </div>
              <div className="userMsgs">
                <div>15323807318</div>
                <div>普通用户</div></div></div>
            <div className="userPower">
      <div style={{color:'#00f'}}><i className="iconfont icon-shoucang" style={{color: '#00f'}}></i>
                <div>我的收藏</div></div>
              <div style={{color: '#00f'}}>
                <i className="iconfont icon-iconfontdizhi" style={{color:'#00f'}}></i>
                <div>地址管理</div></div>
              <div><i className="iconfont icon-order"></i><div>我的订单</div></div>
              <div><i className="iconfont icon-rili"></i><div>周末拼单</div></div>
              <div><i className="iconfont icon-youhuiquan"></i><div>优惠券</div></div>
              <div><i className="iconfont icon-youxuan"></i><div>优选购</div></div>
              <div><i className="iconfont icon-hongbao"></i><div>我的红包</div></div>
              <div><i className="iconfont icon-huiyuan"></i><div>会员plus</div></div>
              <div><i className="iconfont icon-yaoqing"></i><div>邀请返利</div></div>
              <div><i className="iconfont icon-yijianfankui"></i><div>意见反馈</div></div>
              <div><i className="iconfont icon-kefu"></i><div>客服咨询</div></div>
              <div><i className="iconfont icon-baohu"></i><div>账户安全</div></div></div>
            <div className="loginOut">退出登录</div>
          </div>
        </div>
      
    )
  }
}

export default Mine
