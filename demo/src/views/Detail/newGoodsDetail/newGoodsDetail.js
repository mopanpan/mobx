import React, { Component } from 'react'
import { inject, observer } from "mobx-react" // eslint-disable-line
import './newGoodsDetail.scss'
import Header from '../../../components/Header/Header.js'
import CartFooter from '../../../components/cartFooter/cartFooter.js'
import Swiper from 'swiper';
import '../../../../node_modules/swiper/dist/css/swiper.css';
import '../../../pages/font/iconfont.css'
import { Link } from 'react-router-dom'

@inject("brandDetail")  //  监听的函数
//响应observable,state值变化，视图中的observable 及computed数据会同步变化
@observer
class NewGoodsDetail extends Component {
  // state = {
  //     flag:false
  // }

  componentDidMount() {
    this.props.brandDetail.getProDetail({
      id: this.props.match.params.id
    });
    // relate 获取相关商品的id
    this.props.brandDetail.getRelateProData({
      id: this.props.match.params.id
    })
    this.swiper = new Swiper(this.swiper, {
      autoplay: true,
      observer: true,//修改swiper自己或子元素时，自动初始化swiper
      observeParents: true,//修改swiper的父元素时，自动初始化swiper
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      loop: true,
      loopAdditionalSlides: 4,
    })
  }

  render() {
    // let {flag} = this.state;
    console.log(this.props)
    console.log(this.props.brandDetail.proDetail)
    console.log(this.props.brandDetail.proDetail.info)
    let { info, gallery, attribute, issue } = this.props.brandDetail.proDetail;
    console.log(info);
    let { goodsList } = this.props.brandDetail.relatePro;
    console.log(goodsList);
  
    return (
      <div className="goodsPage">
        <Header title={info && info.name} />
        <div className="goodsMain">
          { gallery ? <div className="slider">
            <div className="swiper-container" ref={swiper => { this.swiper = swiper }}>
              <div className="swiper-wrapper">
                {
                  gallery && gallery.map(item => (
                    <div className="swiper-slide" key={item.id}>
                      <div className="topGoodsItem">
                        <img src={item.img_url} alt="" />
                      </div>
                    </div>
                  ))
                }
              </div>
              {/* <!--分页器。如果放置在swiper-container外面，需要自定义样式。--> */}
              <div className="swiper-pagination"></div>
            </div>
          </div> : <div className="sliders">
              9090909
            </div> }

          <div className="serviceList">
            <li>
              <span>★</span>
              30天无忧退货
           </li>
            <li>
              <span>★</span>
              48小时快速退款
            </li>
            <li>
              <span>★</span>
              满88元免邮费
            </li>
          </div>
          <div className="goodsMsgWrap">
            <div className="goodsNameTitle">{info && info.name}</div>
            <div className="goodsNameSubTitle">{info && info.goods_brief}</div>
            <div className="goodsPriceTitle">￥{info && info.retail_price}</div>
          </div>
          <div className="goodsSize">
            <div></div>
            <div> x 0</div>
            <div>
              选择规则
              <i className="iconfont icon-qianjin"></i>
            </div>
          </div>
          <div className="goodsAttribute">
            <div className="goodsAttributeLine">
              商品参数
            </div>
            <div className="goodsAttributeList">
              {
                attribute && attribute.map((item, index) => (
                  <div className="goodsAttributeItem" key={index}>
                    <div className="attributeLabel">{item.name}</div>
                    <div className="attributeContent">{item.value}</div>
                  </div>
                ))
              }
            </div>
          </div>

          <div className="topicDetailImg" dangerouslySetInnerHTML={{ __html: this.props.brandDetail.proDetail.info && this.props.brandDetail.proDetail.info.goods_desc }}>
          </div>

          <div className="goodsAttribute">
            <div className="goodsAttributeLine">常见问题</div>
            {
              issue && issue.map(item => (
                <div className="problemWrap" key={item.id}>
                  <div className="problemLabel">
                    <span>√</span>
                    {item.question}
                  </div>
                  <div className="problemContent">{item.answer}</div>
                </div>
              ))
            }
          </div>

          {/* 大家都在看 */}
          <div className="goodsAttribute">
            <div className="goodsAttributeLine">大家都在看</div>
          </div>

          <div className="aaa">
            <div className="bbb">
              {
                goodsList && goodsList.map(item => (
                  <Link to={`/newGoodsDetail/${item.id}`} className="goodsItem" key={item.id}>
                    {/* <Header title={item.name} /> */}
                    <div className="goodsItemImg">
                      <img src={item.list_pic_url} alt="" />
                    </div>
                    <div className="goodsItemName">{item.name}</div>
                    <div className="goodsItemPrice">￥{item.retail_price}</div>
                  </Link>
                ))
              }
            </div>
          </div>
        </div>

        <CartFooter />

      </div>
    )
  }
}

export default NewGoodsDetail;
// 3 2 5
