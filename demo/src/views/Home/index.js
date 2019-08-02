import React, { Component, Fragment } from 'react';
import './index.scss'
import { inject, observer } from "mobx-react"
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import '../../../node_modules/swiper/dist/css/swiper.css';
// import BScroll from 'better-scroll';
import Loading from '../../components/Loading/Loading.js' // eslint-disable-line

@inject("home")
//响应observable,state值变化，视图中的observable 及computed数据会同步变化
@observer
class Home extends Component { 
    
     tonew=(item)=>{
         this.props.history.push(`/newGoodsDetail/${item}`)
     }


    componentDidMount() {
        

        this.props.home.getHomeData();

        this.banner = new Swiper(this.swp, {
            // autoplay: true,
            observer: true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents: true,//修改swiper的父元素时，自动初始化swiper
        })

        // this.Bscroll = new BScroll(this.bscroll, {
        //     scrollY: true,
        //     click: true,
        //     tap: true,
        //     probeType: 2
        // })

    }
    componentDidUpdate() {
        this.swiper = new Swiper(this.swiper, {
            autoplay: true,
            observer: true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents: true,//修改swiper的父元素时，自动初始化swiper
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            loop: true,
            loopAdditionalSlides: 3,
        })
    }

    componentWillUnmount() {
        // this.Bscroll.destroy()
    }

    render() {
        const { homes: { banner, brandList, categoryList, channel, hotGoodsList, newGoodsList, topicList } } = this.props.home;// 在这个home组件 构造函数里面 解构属性 -> store的 @observable 修饰属性
        // console.log(homes); 
        console.log(banner)
        // console.log(homes.banner); 
        // console.log(homes.brandList); 
        // console.log(homes.categoryList); 
        // console.log('````````````````````',this.props.home.homes);
        return (
            <div className="home" ref={bscroll => { this.bscroll = bscroll }}>
                <div>
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
                                <Link to={`/cateDetail/${item.id}`} key={item.id} className="channelItem">
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
                                    <div className="hotGoodsItem" key={item.id} onClick={()=>this.tonew(item.id)}>
                                        <img src={item.list_pic_url} alt="" />
                                        <div className="hotGoodsInfos">
                                            <div className="hotGoodsName">{item.name}</div>
                                            <div className="hotGoodsInfo">{item.goods_brief}</div>
                                            <div className="hotGoodsPrice">￥{item.retail_price}</div>
                                        </div>
                                    </div>
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
                                                             {item.title}
                                                            <span className="topGoodPrice">￥{item.price_info}</span>
                                                        </div>
                                                        <div className="topGoodTitle">{item.subtitle}</div>
                                                    </Link>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Fragment>
                        {
                            categoryList && categoryList.map(item => (
                                <div className="cateGoryBox" key={item.id}>
                                    <div className="cateGoryName">{item.name}</div>
                                    <div className="cateGoryGoodsWrap">
                                        {
                                            item.goodsList.map(val => (
                                                <Link to={`/goodsDetail/${val.id}`} key={val.id} className="item">
                                                    <div className="goodsItemImg">
                                                        <img src={val.list_pic_url} alt="" />
                                                    </div>
                                                    <div className="goodsItemName">
                                                        {val.name}
                                                    </div>
                                                    <div className="goodsItemPrice">
                                                        ￥{val.retail_price}
                                                    </div>
                                                </Link>
                                            ))
                                        }
                                        <Link to={`/categorysDetail/${item.id}`} className="categoryMoreGoods">
                                            <div>更多{item.name}好物</div>
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAMAAADwFEhBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABLUExURf///4uLi7KysszMzHJycvb29qurq2ZmZv7+/m1tbZSUlN3d3Xd3d35+fsbGxtnZ2e/v7/z8/J2dneHh4evr676+voaGhri4uNPT04zm/X4AAAIzSURBVFjDvVjRlqsgDKwojgEsYq36/196pbZdRVyjh728eCxlIGEySbzd/nI0uWh7QwCZvhV5cxrgUdYIRl0+TgDIwQOQErlu5PTa6Fwo8jCDZCKIAjCldeufnS0NUAgGSnWfELLRxebcmE0o9+oAopv+ldn9eevnu18hcjrax5+T8l/mS0Ad2isVUO7t41rQs2K47EloXRxCgUbe1Y0EFQOpWhSayyBdoI2cuARpPg01odzeCMieCQZLCG+nIzzPRdQTtOZJlUFV5zAqhWy15I5Cng1taXBfvharV+bIVxuL4FjMkUEsj6GvKJ1eHGRAdk0uMwwfD9cYr2GMqKvPkUx1DcOZjxPKCG3D0ddRXf8urWEZlpuYelnUcx4BuWNCTSCR1OAIzUwVxWFlhiICoubIEwx3vCVqa7OYaaaYPPdSOW75/jKi55J0UrqNomv0/mHATcde94MzNzD+QeCHvUAgVRKFfwCn1GsRq6/VtMXA8VgmKDdjrG3hYGxt4ft0tmVYafns0/6EAG18+r5bxdbSyN2+Ocbk+kzUPM51XsztcP0dc6zY34m5KfY7tgbtxP5Hg1haKPuoBn2XTmni0Jg+qoXum5g4uSGuyT+5IUWO8rnSXoGwy6SdIGcnqR1S1DBXaqlbWEulqOmS1JZJatxXrc1u2B7xWnsnoe4Zotx+78Fy527vkaQHStKLpekJk/SmPz2yDntkze6Rg169k87J7nSvnuabQfDtorj47eK/j3/n9xya7EBtgAAAAABJRU5ErkJggg==" alt="more"></img>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </Fragment>

                </div>
            </div>
        )
    }
}
export default Home;



// {`/brandDetail/${item.id}`}
// {{ pathname: `/brandDetail/${item.id}`, state: { data: item } }}
// {{ pathname: `/brandDetail/${item.id}`}}
// <a href="javaScript">opopop</a>
