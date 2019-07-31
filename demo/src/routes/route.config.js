import React from 'react' // eslint-disable-line
// import Index from "../pages";
// import Home from "../views/Home";
// import SpecialTopic from "../views/SpecialTopic";
// import Classify from '../views/Classify/index'
// import Cart from '../views/Cart/index'
// import Mine from '../views/Mine/index'

// 我的页面
// import Login from "../views/Login";

// 首页
// import cateDetail from '../views/Detail/cateDetail/cateDetail.js'
// import BrandDetail from "../views/Detail/brandDetail/brandDetail"; // 品牌制造商直供
// import newGoodsDetail from '../views/Detail/newGoodsDetail/newGoodsDetail.js' // 新品首发详情
// import hotGoodsDetail from '../views/Detail/hotGoodsDetail/hotGoodsDetail' // 人气推荐
// import projectSelDetail from '../views/Detail/projectSelDetail/projectSelDetail.js' // 专题精选
// import GoodsDetail from '../views/Detail/goods/goodsDetail' //商品详情
// import CategorysDetail from '../views/Detail/CategorysDetail/categorysDetail' //更多居家详情

//专题
// import SpecialDetail from '../views/RouteDetail/SpecialDetail/index'


// 路由懒加载
import Loadable from 'react-loadable';
const Loading = () => {
    return <div>
        <img src="http://5b0988e595225.cdn.sohucs.com/images/20170927/a3c59b2274a64221bc7a4b939677f821.gif" alt="" />
    </div>
}

const Login = Loadable({
    loader: () => import('../views/Login/index.js'),
    loading: Loading
})
const Index = Loadable({
    loader: () => import('../pages/index.js'),
    loading: Loading
})
const Home = Loadable({
  loader:()=>import('../views/Home/index.js'),
  loading:Loading
})
const SpecialTopic = Loadable({
    loader:()=>import('../views/SpecialTopic'),
    loading:Loading
})
const Classify = Loadable({
    loader:()=>import('../views/Classify/index.js'),
    loading:Loading
})
const Cart = Loadable({
    loader:()=>import('../views/Cart/index.js'),
    loading:Loading
})
const Mine = Loadable({
    loader:()=>import('../views/Mine/index.js'),
    loading:Loading
})

// 首页 detail
const cateDetail = Loadable({
    loader:()=>import('../views/Detail/cateDetail/cateDetail.js'),
    loading:Loading
})
const BrandDetail = Loadable({
    loader:()=>import('../views/Detail/brandDetail/brandDetail'),
    loading:Loading
})
const newGoodsDetail = Loadable({
    loader:()=>import('../views/Detail/newGoodsDetail/newGoodsDetail.js'),
    loading:Loading
})
const hotGoodsDetail = Loadable({
    loader:()=>import('../views/Detail/hotGoodsDetail/hotGoodsDetail'),
    loading:Loading
})
const projectSelDetail = Loadable({
    loader:()=>import('../views/Detail/projectSelDetail/projectSelDetail.js'),
    loading:Loading
})
const GoodsDetail = Loadable({
    loader:()=>import('../views/Detail/goods/goodsDetail'),
    loading:Loading
})
const CategorysDetail = Loadable({
    loader:()=>import('../views/Detail/CategorysDetail/categorysDetail'),
    loading:Loading
})
const SpecialDetail = Loadable({
    loader:()=>import('../views/RouteDetail/SpecialDetail/index'),
    loading:Loading
})
//模糊搜索
const SearchDetail = Loadable({
    loader:()=>import('../views/Detail/SearchDetail/searchdetail'),
    loading:Loading
})
//模糊详情
const newDetail = Loadable({
    loader:()=>import('../views/Detail/newDetail/newdetail'),
    loading:Loading
})
//我的收藏
const Collection = Loadable({
    loader:()=>import('../views/Detail/Collection/Collection'),
    loading:Loading
})


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
    // 专题
<<<<<<< HEAD
=======
    {
        path: "/specialtopic/:id",
        component: SpecialDetail
    },
    {
        path: "/SearchDetail",
        component: SearchDetail
    },
    {
        path: "/newDetail/:id",
        component: newDetail
    },
>>>>>>> mp
    {
        path: "/collect",
        component: Collection
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