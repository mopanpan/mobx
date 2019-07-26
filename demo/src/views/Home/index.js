import React, { Component } from 'react';
import './index.scss'
import { inject, observer } from "mobx-react"
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import '../../../node_modules/swiper/dist/css/swiper.css'
// import { observer } from "mobx-react";
@inject("home")
//响应observable,state值变化，视图中的observable 及computed数据会同步变化
@observer
class Home extends Component {
    componentDidMount() {
        this.props.home.getHomeData();
        this.swiper = new Swiper(this.swiper, {
            autoplay: true,
            observer: true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents: true,//修改swiper的父元素时，自动初始化swiper
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            }
        })

        this.banner = new Swiper(this.swp, {
            autoplay: true,
            observer: true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents: true,//修改swiper的父元素时，自动初始化swiper
        })
    }
    render() {
        const { homes: { banner, brandList, categoryList, channel, hotGoodsList, newGoodsList, topicList } } = this.props.home;// 在这个home组件 构造函数里面 解构属性 -> store的 @observable 修饰属性
        // console.log(homes); 
        console.log(banner)
        // console.log(homes.banner); 
        // console.log(homes.brandList); 
        // console.log(homes.categoryList); 
        // console.log('````````````````````',this.props);
        return (
            <div className="home">
                <div className="slider">
                    <div className="swiper-container" ref={swiper => { this.swiper = swiper }}>
                        <div className="swiper-wrapper">
                            {
                                banner && banner.map(item => (
                                    <div className="swiper-slide" key={item.id}>
                                        <img src={item.image_url} alt="" />
                                    </div>
                                )
                                )
                            }
                        </div>
                        {/* <!--分页器。如果放置在swiper-container外面，需要自定义样式。--> */}
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
                <div className="channelWrap">
                    {
                        channel && channel.map(item => (
                            <Link to={`/categorys/${item.id}`} key={item.id} className="channelItem">
                                <img src={item.icon_url} alt="" />
                                <div>{item.name}</div>
                            </Link>
                        ))
                    }
                </div>
                <div className="brandBox">
                    <div className="brand">品牌制造商直供</div>
                    <div className="brandWrap">
                        {
                            brandList && brandList.map(item => (
                                <Link to={`/brandDetail/${item.id}`} key={item.id} className="brandItem">
                                    <div className="brandItemName">{item.name}</div>
                                    <div className="brandItemMinPrice">
                                        {item.floor_pric}元起
                                        </div>
                                    <img src={item.new_pic_url} alt="" />
                                </Link>
                            ))
                        }
                    </div>
                </div>

                <div className="newGoodsBox">
                    <div className="newGoodsTitle">新品首发</div>
                    <div className="newGoodsWrap">
                        {
                            newGoodsList && newGoodsList.map(item => (
                                <Link to={`/newGoodsDetail/${item.id}`} key={item.id} className="newGoodsItem">
                                    <img src={item.list_pic_url} alt="" />
                                    <div className="newGoodsName">{item.name}</div>
                                    <div className="newGoodsPrice">￥{item.retail_price}</div>
                                </Link>
                            ))
                        }
                    </div>
                </div>

                <div className="hotGoodsBox">
                    <div className="hotGoodsTitle">人气推荐</div>
                    <div className="hotGoodsWrap">
                        {
                            hotGoodsList && hotGoodsList.map(item => (
                                <Link to={`/hotGoodsDetail/${item.id}`} className="hotGoodsItem" key={item.id}>
                                    <img src={item.list_pic_url} alt="" />
                                    <div className="hotGoodsInfos">
                                        <div className="hotGoodsName">{item.name}</div>
                                        <div className="hotGoodsInfo">{item.goods_brief}</div>
                                        <div className="hotGoodsPrice">￥{item.retail_price}</div>
                                    </div>
                                </Link>
                            )
                            )
                        }

                    </div>
                </div>

                <div className="topGoodsBox">
                    <div className="topGoodsTitle">专题精选</div>
                    <div className="topGoodsWrap">
                        <div className="sliders">
                            <div className="swiper-container" ref={swp => { this.swp = swp }}>
                                <div className="swiper-wrapper">
                                    {
                                        topicList && topicList.map(item => (
                                            <div className="swiper-slide" key={item.id}>
                                                <Link to={`/projectSelDetail/${item.id}`} className="topGoodsItem">
                                                    <img src={item.scene_pic_url} alt="" />
                                                    <div className="topGoodSubTitle">
                                                        关爱他成长的每一个足迹
                                                    <span>￥{item.price_info}</span>
                                                    </div>
                                                    <div className="topGoodPrice">{item.subtitle}</div>
                                                </Link>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
export default Home;
// {`/brandDetail/${item.id}`}
// {{ pathname: `/brandDetail/${item.id}`, state: { data: item } }}
// {{ pathname: `/brandDetail/${item.id}`}}
