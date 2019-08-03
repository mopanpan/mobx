import React, { Component } from 'react'
import './shoppingList.scss';
import { inject, observer } from 'mobx-react';

@inject('cart')
@observer
class ShoppingList extends Component {

    //点击单选按钮
    checkeds(checked, product_id) {
        console.log('编辑页的单选按钮', checked, product_id); // 0 20   数据里是默认的 // 0 是不加类  1是加类
        let number = checked === 1 ? 0 : 1;   // 0 !===1 所以走 : 1[加类] | 执行else  // 通过判断 1和0 加类或不加类
        console.log(number);

        this.props.cart.cartChecked({
            isChecked: number,
            productIds: product_id
        })
    }

    // 点击加减判断不同的类型 [count]
    count(count, product_id, id, goods_id) {
        console.log(count)
        let nums = count >= 1 ? count : 1; // 减到1的话就不能减了
        let obj = {
            goodsId: goods_id,
            id: id,
            number: nums,
            productId: product_id
        }
        this.props.cart.updateCount(obj);

    }
    render() {
        console.log(this.props.item);
        let { item, flag, isShow } = this.props; // isShow=false 默认
        return (
            <div className="cartGoodsItem" key={item.goods_id}>
                <div className="isCheckItem">
                    { // 组件里面   点击编辑切换成完成页单选按钮  否则是 编辑页单选按钮 // 编辑页 isShow===false 点击的时候就是true 否则就是false
                        flag ? <img src={isShow ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC" : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC'}
                            // 点击事件传的是后台接口的id进行加类和删除类
                            onClick={() => { this.props.cart.update(item.product_id) }} alt="" />
                            :  // checked: 1 数据里面默认的   === 1 让它不选中（不加类）  否则 选中（加类）
                            <img src={item.checked === 1 ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg==' :
                                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC'}
                                onClick={this.checkeds.bind(this, item.checked, item.product_id)} alt="" />
                    }
                </div>
                {/* 图片 */}
                <div className="goodsImg">
                    <img src={item.list_pic_url} alt="" />
                </div>

                {flag ? <div className="cartGoodEditWrap">
                    <div className="cartEditSizeName">已选择：</div>
                    <div className="cartEditNum">
                        <div style={{ color: 'red' }} className="price">￥{item.market_price}</div>
                        <div className="count">
                            <div className="countOp">
                                <div className="reduce" onClick={this.count.bind(this, item.number - 1, item.product_id, item.id, item.goods_id)}>-</div>
                                <div className="num">{item.number}</div>
                                <div className="add" onClick={this.count.bind(this, item.number + 1, item.product_id, item.id, item.goods_id)}>+</div>
                            </div>
                        </div>
                    </div>
                </div> : <>
                        <div className="cartGoodsMsg">
                            <div>{item.goods_name}</div>
                            <div></div>
                            <div style={{ color: "red" }}>￥{item.market_price}</div>
                        </div>
                        <div className="cartGoodsNum">x{item.number}</div>
                    </>}
            </div>

        )
    }
}

export default ShoppingList;
