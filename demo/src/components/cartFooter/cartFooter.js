import React, { Component } from 'react'
import './cartFooter.scss';
import '../../pages/font/iconfont.css'
// import './font/iconfont.css'
class CartFooter extends Component {
  render() {
    return (
      <div className="goodsPageDo">
         <div className="isLike">☆</div>
         <div className="cartNum">
             <i className="iconfont icon-icon--">
                 <span>13</span>
             </i>
         </div>
         <div className="addCart">加入购物车</div>
         <div className="payGoods">立即购买</div>
      </div>
    )
  }
}

export default CartFooter;

