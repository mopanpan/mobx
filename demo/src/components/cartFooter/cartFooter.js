import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './cartFooter.scss';
import '../../pages/font/iconfont.css'
// import './font/iconfont.css';
import { Modal, List, Button, WhiteSpace, WingBlank, Icon } from 'antd-mobile';
class CartFooter extends Component {
  state = {
    status: false,
    modal1: false,
    modal2: false
  }

  // 点击star
  clickStar() {
    // alert(9) ★★
    this.setState({
      status: !this.state.status
    })
  }

  //  点击购物车
  cart() {
    this.props.history.push('/cart')
  }

  // 点击加入购物车
  addCarts(e) {
    console.log(e);
    this.setState({
      modal2:true
    })
    // e.preventDefault();
  }

  showModal = key => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      [key]: true,
    });
  }

  onClose = key => () => {
    this.setState({
      [key]: false,
    });
  }

  render() {
    let { status } = this.state;
    console.log('++++++++++', this.props)
    return (
      <>
        <Modal
          popup
          visible={this.state.modal2}
          onClose={this.onClose('modal2')}
          animationType="slide-up"
        >
          <div className="goodsPageDo">
            <div className={status ? 'like' : 'nolike'} onClick={() => this.clickStar()}></div>
            <div className="cartNum" onClick={this.cart.bind(this)}>
              <i className="iconfont icon-icon--">
                <span>13</span>
              </i>
            </div>
            <div className="addCart" onClick={(e) => this.addCarts(e)}>加入购物车</div>
            <div className="payGoods">立即购买</div>
          </div>
        </Modal>

        <div className="goodsPageDo">
          <div className={status ? 'like' : 'nolike'} onClick={() => this.clickStar()}></div>
          <div className="cartNum" onClick={this.cart.bind(this)}>
            <i className="iconfont icon-icon--">
              <span>13</span>
            </i>
          </div>
          <div className="addCart" onClick={(e) => this.addCarts(e)}>加入购物车</div>
          <div className="payGoods">立即购买</div>
        </div>
      </>
    )
  }
}

export default withRouter(CartFooter);

// style={{color:}}
//  onClick={this.addCarts.bind(this)}
//    <div className={status ? 'like' : ''} onClick={()=>this.clickStar()}>☆</div>



/* <Modal
popup
visible={this.state.modal2}
onClose={this.onClose('modal2')}
>
<List renderHeader={() => <div>委托买入</div>} className="popup-list">

  {['股票名称', '股票代码', '买入价格'].map((i, index) => (
    <List.Item key={index}>{i}</List.Item>
  ))}
  <List.Item>
    <Button type="primary" onClick={this.onClose('modal2')}>买入</Button>
  </List.Item>

</List>
</Modal> */

