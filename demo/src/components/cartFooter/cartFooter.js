import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import './cartFooter.scss';
import '../../pages/font/iconfont.css'
// import './font/iconfont.css'
class CartFooter extends Component {
  state = {
    status:false
  }

  // 点击star
  clickStar(){
    // alert(9) ★★
    this.setState({
      status:!this.state.status
    })
  }

  //  点击购物车
  cart(){
   this.props.history.push('/cart')
  }

  // 点击加入购物车
  addCarts(e){
    console.log(e)
    // e.preventDefault();
  }

  render() {
    let {status} = this.state;
    console.log('++++++++++',this.props)
    return (
      <div className="goodsPageDo">
         <div className={status ? 'like' : 'nolike'} onClick={()=>this.clickStar()}></div>
         <div className="cartNum" onClick={this.cart.bind(this)}>
             <i className="iconfont icon-icon--">
                 <span>13</span>
             </i>
         </div>
         <div className="addCart" onClick={(e)=>this.addCarts(e)}>加入购物车</div>
         <div className="payGoods">立即购买</div>
      </div>
    )
  }
}

export default withRouter(CartFooter);

// style={{color:}}
//  onClick={this.addCarts.bind(this)}
//    <div className={status ? 'like' : ''} onClick={()=>this.clickStar()}>☆</div>

