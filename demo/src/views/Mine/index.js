import React, { Component } from 'react'
import './Mine.scss';
import '@/pages/font/iconfont.css';
import { Toast } from 'antd-mobile'
import { inject, observer } from 'mobx-react';
@inject('collection')
@observer
class Mine extends Component {
  state = {
    userPower: [
      {
        icon: 'icon-shoucang',
        name: '我的收藏',
        link: '/collect'
      },
      {
        icon: 'icon-cart',
        name: '地址管理',
        link: '/address'
      },
      {
        icon: 'icon-dingdan',
        name: '我的订单'
      },
      {
        icon: 'icon-all',
        name: '周末拼单'
      },
      {
        icon: 'icon-youhuiquan',
        name: '优惠券'
      },
      {
        icon: 'icon-car',
        name: '优选购'
      },
      {
        icon: 'icon-form',
        name: '我的红包'
      },
      {
        icon: 'icon-huiyuan',
        name: '会员plus'
      },
      {
        icon: 'icon-wode',
        name: '邀请返利'
      },
      {
        icon: 'icon-qrcode',
        name: '意见反馈'
      },
      {
        icon: 'icon-kefu',
        name: '客服咨询'
      },
      {
        icon: 'icon-email',
        name: '账户安全'
      }
    ]

  }


  showPower(item) {
    // console.log(item)
    if ('link' in item) {
      this.props.history.push(item.link)

    } else {
      Toast.offline(`${item.name}功能还未解锁，请耐心等候~`, 1)
    }
  }
  loginOut () {
    this.props.history.push('/login')
    // this.props.actions.loginFailure()
    // this.props.history.goBack('/login')
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('nideShopUser')
  }
  render() {
    // console.log(this.props,'111')
    const userPhone = window.localStorage.getItem('nideShopUser')
    return (
      <div id="minePage">
        <div className="userMsgWrap">
          <div className="userLogo"></div>
          {
            userPhone ?
              <div className="userMsgs">
                <div>{userPhone}</div>
                <div>普通用户</div>
              </div> :
              <div className="userMsgs">
                <div style={{ height: '100%' }}>未登录</div>
              </div>
          }
        </div>
        <div className="userPower">
          {
            this.state.userPower.map((item) => (
              <div key={item.name} onClick={this.showPower.bind(this, item)} style={'link' in item ? { color: '#2196f3' } : {}}>
                <i className={`iconfont ${item.icon}`} style={'link' in item ? { color: '#2196f3' } : {}}></i>
                <div>{item.name}</div>
              </div>)
            )
          }
        </div>

        <div className="loginOut" onClick={this.loginOut.bind(this)}>退出登录</div>
      </div>
    )
  }
}

export default Mine
