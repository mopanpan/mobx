import React, { Component } from 'react'
import {inject, observer} from 'mobx-react';
import './CollectionDetail.scss'
import { Modal, Carousel } from 'antd-mobile';
import Header from '../../../components/Header/Header.js'
@inject('collectionDetail')
@observer
class CollectionDetail extends Component {
  state={
    isShowSize:true
  }
  guiShow=()=>{
  console.log(this)
     this.setState({
      isShowSize:!this.state.isShowSize
     })
  }
  
  
  render() {
    console.log(this.props.collectionDetail.data,'999')
   const issue=this.props.collectionDetail.data.issue
   const attribute=this.props.collectionDetail.data.attribute
   const gallery=this.props.collectionDetail.data.gallery
   const info=this.props.collectionDetail.data.info
   const specificationList=this.props.collectionDetail.data.specificationList
   const comment=this.props.collectionDetail.data.comment
   console.log(specificationList)

   
   const {isShowSize}=this.state;
      return (
      
            <div className="goodsPage">
            <Modal
            popup
            visible
            onClose={this.changeIsShowSize}
            animationType="slide-up">
                <div className="goodsSizeDo">
                  <div className="goodsSizeSetMsg">
                    {/* {gallery.length? <img src={gallery[0].img_url} alt="goods"/>:null} */}
                    <div className="gooodsSizePriceAndSize">
                      <div>单价: <span>￥</span></div>
                      <div>库存: <span>件</span></div>
                      <div>已选择:
                        <br/></div>
                    </div>
                    <div className="closeModel">
                      <i className="iconfont icon-cc-close-square"></i>
                    </div>
                  </div>
                  <div className="goodsSizeWrap">
                  
                        <div className="goodsSizeItem" >
                          <div className="goodsSizeItemName"></div>
                          <div className="goodsSizeListWrap">
                           
                          </div>
                        </div>
                 
                    <div className="goodsSizeItem">
                      <div className="goodsSizeItemName">数量</div>
                    
                            <div className="goodsSizeListWrap">
                              <div className="goodsBuyCount">
                                <div className="onePx_border" >-</div>
                                <div className="onePx_border"></div>
                                <div className="onePx_border" >+</div>
                              </div>
                            </div>
                     
                            <div className="goodsSizeListWrap">已售馨!</div>
                       
                    </div>
                  </div>
                </div>
                <div className="goodsDoWrap">
                  <div>加入购物车</div>
                  <div>立即下单</div>
                </div>
                </Modal>
             
             
                  <Header title={info&&info.name}></Header> 
                  <div>
                  <Carousel autoplay infinite>
                {gallery&&gallery.map(item => (
                    <div className="goodsBannerItem" key={item.id}>
                     <img src={item.img_url} alt=""/>
                    </div>
                ))}
              </Carousel>
              <ul className="serviceList">
                <li><span>★</span>30天无忧退货</li>
                <li><span>★</span>48小时快速退款</li>
                <li><span>★</span>满88元免邮费</li>
              </ul>
             
                  {/* <div className="goodsMsgWrap">
                    <div className="goodsNameTitle">{brand.name}</div>
                    <div className="goodsNameSubTitle">{brand.simple_desc}</div>
                    <div className="goodsPriceTitle">￥{brand.retail_price}</div>
                 
                </div> */}
              
             
              <div className="goodsSize">
              
              <div key={info&&info.brand_id}>
                 <h3 title={info&&info.name}></h3>
                 <p title={info&&info.goods_brief}></p>
                 <p title={info&&info. retail_price}></p>
                
              </div>
             
              </div>
              <div className="goodsAttribute">
                <div className="goodsAttributeLine">
                  商品参数
                </div>
                <div className="goodsAttributeList">
                 {
                   attribute&&attribute.map((item,index)=>(
                      <div className="goodsAttributeItem" key={index}>
                      <div className="attributeLabel">{item.name}</div>
                      <div className="attributeContent">{item.value}</div>
                    </div>
                   ))
                 }
                       
                
                </div>
              </div>
              <div  dangerouslySetInnerHTML={{__html:info}} className="topicDetailImg"></div>
              <div className="goodsAttribute">
                <div className="goodsAttributeLine">
                  常见问题
                </div>        
              {
                issue&&issue.map(item=>(
                    <div className="problemWrap" key={item.id}>
                      <div className="problemLabel" style={{color:'#000'}}>
                      <span>√</span>{item.question}
                    </div>
                    <div className="problemContent">
                        {item.answer}
                    </div>
                  </div>
                ))
              }
              </div>
              <div className="goodsAttribute">
                <div className="goodsAttributeLine">
                  大家都在看
                </div>
              </div>
              <div className="goodsList" style={{display:'flex',flexWrap:'wrap',width:'100%'}}>
               {
                 gallery&&gallery.map(item=>(
                   <ul key={item.id} style={{width:'50%'}}>
                     <li style={{width:'100%',height:'3rem'}}>
                       <img src={item.img_url} alt="" style={{width:'100%',height:'100%'}}/>
                     </li>
                    
                   </ul>
                 ))
               }
              </div>
             
                  </div>
                  <div className="goodsPageDo">
                <div className="isLike">
                  {comment&&comment.countd===0?'★': '☆'}
                </div>
                <div className="cartNum">
                  <i className="iconfont icon-Add-Cart">
                    <span></span>
                  </i>
                </div>
                <div className="addCart" >加入购物车</div>
                <div className="payGoods">立即购买</div>
              </div>
            </div>
            )
    
  }
}

export default CollectionDetail
