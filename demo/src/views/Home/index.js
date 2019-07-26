import React, { Component } from 'react';
import './index.scss'
import { inject, observer } from "mobx-react"
import { Link, NavLink } from 'react-router-dom';
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
                                <NavLink to={{ pathname: `/brandDetail/${item.id}`}} key={item.id} className="brandItem">
                                    <div className="brandItemName">{item.name}</div>
                                    <div className="brandItemMinPrice">
                                        {item.floor_pric}元起
                                        </div>
                                    <img src={item.new_pic_url} alt="" />
                                </NavLink>
                            ))
                        }
                    </div>
                </div>

                <div className="newGoodsBox">
                    <div className="newGoodsTitle">新品首发</div>
                    <div className="newGoodsWrap">

                    </div>
                </div>

            </div>
        )
    }
}
export default Home;
//{`/brandDetail/${item.id}`}
// {{ pathname: `/brandDetail/${item.id}`, state: { data: item } }}
