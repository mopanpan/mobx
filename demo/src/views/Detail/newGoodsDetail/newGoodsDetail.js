import React, { Component } from 'react'
import { inject, observer } from "mobx-react"
import './newGoodsDetail.scss'


// @inject("")
// //响应observable,state值变化，视图中的observable 及computed数据会同步变化
// @observer
class NewGoodsDetail extends Component {
  render() {
    return (
      <div>
         新品详情
      </div>
    )
  }
}

export default NewGoodsDetail
