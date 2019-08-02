import React, { Component, Fragment } from 'react'//eslint-disable-line
import { inject, observer } from 'mobx-react';
import ShoppingList from '../../components/shoppingList/shoppingList.js';
import './cart.scss';

@inject('cart')
@observer
class Cart extends Component {
  state = {
    flag: false
  }
  componentDidMount() {
    this.props.cart.getCartData()
  }

  //编辑的全选
  AllChecked(show) {
    this.props.cart.cartChecked(show);
  }

  //  完成页的全选
  allCheck() {
    let { goodsCount, checkedGoodsCount } = this.props.cart.getCartNum;

    let num = goodsCount === checkedGoodsCount ? 0 : 1;

    this.props.cart.cartChecked({
      isChecked: num,
      productIds: this.props.cart.getId
    });

    // let obj = {
    //   isChecked: num,
    //   productIds: this.props.carts.getId
    // }
    // this.props.carts.cartChecked(obj);
  }

  delData() {
    console.log('del')
  }

  render() {
    let { flag } = this.state;
    console.log(this.props);
    console.log(this.props.cart.cartData);
    console.log(this.props.cart.getCartNum)
    // let { cartList } = this.props.cart.cartData;
    // console.log(cartList);
    // 是否被选中的接口
    let { goodsCount, // 所有商品的数量
      // goodsAmount, // 所有商品的总价 
      checkedGoodsCount, //  所有被选中的商品
      checkedGoodsAmount // 所有被选中商品的总价
    } = this.props.cart.getCartNum;
    console.log(goodsCount);
    // console.log(this.props.carts.editAll.length);

    return (
      <div className="cart">
        <ul className="serviceList">
          <li><span>★</span>30天无忧退货</li>
          <li><span>★</span>48小时快速退款</li>
          <li><span>★</span>满88元免邮费</li>
        </ul>
        {/* 1 */}
        {goodsCount > 0 ? <>
          <div className="cartGoodsListWrap">
            {
              this.props.cart.cartData && this.props.cart.cartData.map(item => {
                return <ShoppingList key={item.id} item={item} flag={this.state.flag} isShow={item.isShow} />
              })
            }
          </div>
          <div className="cartGoodsDo">
            <div className="isCheckItem">
              {   // 如果flag=false;点击一下为true
                flag ? <img src={this.props.cart && this.props.cart.IsShow ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC" : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC'}
                  onClick={this.AllChecked.bind(this,!this.props.cart.IsShow)} alt="" />
                  : <img src={goodsCount === checkedGoodsCount ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg==' :
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC'}
                    onClick={this.allCheck.bind(this)} alt="" />}
            </div>
            <div className="cartMsgAll">
              {  //点击一下变为true切换成完成页面  再点击完成切换到编辑页面 update
                flag ? <>已选({this.props.cart && this.props.cart.editAll.length})</> : <>已选({checkedGoodsCount})￥{checkedGoodsAmount}</>
              }
            </div>
            <div className="cartAllDoButton"
              onClick={() => this.setState({
                flag: !flag
              })}>
              {
                flag ? <span>完成</span> : <span>编辑</span>
              }
            </div>

            <div className="cartAllDoButton pay">
              {
                flag ? <span onClick={() => this.delData()}>删除所选</span> : <span>下单</span>
              }
            </div>
          </div>
        </> : <>
            <div className='cartGoodsListWrap'></div>
            <img className='noGoods' src='data:image/png;base64,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' alt="" />
            <div className='noGoods'>去添加点什么吧~</div>
          </>}
      </div>
    )
  }
}

export default Cart;

// onClick={this.AllChecked.bind(this, this.props.cart && !this.props.cart.IsShow)}
/* {
          cartList && cartList.map(item => {
            return <ShoppingList key={item.id} item={item} flag={this.state.flag} isShow={item.isShow}/>
          })
        } */


/* {
  cartList && cartList.map(item => (
    <div className="cartGoodsItem" key={item.id}>
      <div className="isCheckItem">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC" alt="" />
      </div>
      <div className="goodsImg" onClick={()=>{this.clickOne()}}>
        <img src={item.list_pic_url} alt="" />
      </div>
      <div className="cartGoodsMsg">
        <div>{item.goods_name}</div>
        <div></div>
        <div style={{ color: "red" }}>￥{item.market_price}</div>
      </div>
      <div className="cartGoodsNum">x15</div>
    </div>
  ))
} */

/* <div className="cartAllDoButton pay">
              {
                flag ? '删除所选' : '下单'
              }
            </div> */

