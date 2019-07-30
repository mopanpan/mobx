import Index from "../pages";
import Home from "../views/Home";
import SpecialTopic from "../views/SpecialTopic";
import Classify from '../views/Classify/index'
import Cart from '../views/Cart/index'
import Mine from '../views/Mine/index'
// 我的页面
import Login from "../views/Login";

// 首页
import cateDetail from '../views/Detail/cateDetail/cateDetail.js'
import BrandDetail from "../views/Detail/brandDetail/brandDetail"; // 品牌制造商直供
import newGoodsDetail from '../views/Detail/newGoodsDetail/newGoodsDetail.js' // 新品首发详情
import hotGoodsDetail from '../views/Detail/hotGoodsDetail/hotGoodsDetail' // 人气推荐
import projectSelDetail from '../views/Detail/projectSelDetail/projectSelDetail.js' // 专题精选
import GoodsDetail from '../views/Detail/goods/goodsDetail' //商品详情
import CategorysDetail from '../views/Detail/CategorysDetail/categorysDetail' //更多居家详情

import SearchDetail from '../views/Detail/SearchDetail/searchdetail' //搜索详情
import NewDetail from '../views/Detail/newDetail/newdetail'//有排序的详情
//专题
import SpecialDetail from '../views/RouteDetail/SpecialDetail/index'

const route = [
    {
        path: "/login",
        component: Login
    },
    {
        path: "/cateDetail/:id",
        component: cateDetail
    },
    {
        path: "/brandDetail/:id",
        component: BrandDetail
    },
    {
        path: "/newGoodsDetail/:id",
        component: newGoodsDetail
    },
    {
        path: "/hotGoodsDetail/:id",
        component: hotGoodsDetail
    },
    {
        path: "/projectSelDetail/:id",
        component: projectSelDetail
    },
    {
        path: "/goodsDetail/:id",
        component: GoodsDetail
    },
    {
        path: "/categorysDetail/:id",
        component: CategorysDetail
    },
    {
        path: "/searchDetail",
        component: SearchDetail
    },
    {
        path: "/newDetail/:keyword",
        component: NewDetail
    },
    //  专题
    {
        path: "/specialtopic/:id",
        component: SpecialDetail
    },
    {
        path: "/",
        component: Index,
        children: [
            {
                path: "/home",
                component: Home,
            },
            {
                path: "/specialtopic",
                component: SpecialTopic,
            },
            {
                path: "/classify",
                component: Classify
            },
            {
                path: "/cart",
                component: Cart
            },
            {
                path: "/mine",
                component: Mine
            },
            {
                from: "/",
                to: "/home"
            }
        ]
    }
]

export default route;