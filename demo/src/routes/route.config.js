import Index from "../pages";
import Home from "../views/Home";
import SpecialTopic from "../views/SpecialTopic";
import Classify from '../views/Classify/index'
import Cart from '../views/Cart/index'
import Mine from '../views/Mine/index'
import Login from "../views/Login";
import cateDetail from '../views/Detail/cateDetail.js'
import BrandDetail from "../views/Detail/brandDetail/brandDetail"; // 品牌制造商直供
import newGoodsDetail from '../views/Detail/newGoodsDetail/newGoodsDetail.js' // 新品首发详情
import hotGoodsDetail from '../views/Detail/hotGoodsDetail/hotGoodsDetail' // 人气推荐
import projectSelDetail from '../views/Detail/projectSelDetail/projectSelDetail.js' // 专题精选
// rbac  vuereadElementMe 
const route = [
    {
        path: "/login",
        component: Login
    },
    {
        path: "/categorys/:id",
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
        path: "/",
        component: Index,
        children: [
            {
                path: "/home",
                component: Home,
            },
            {
                path: "/specialtopic",
                component: SpecialTopic
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