import Index from "../pages";
import Home from "../views/Home";
import SpecialTopic from "../views/SpecialTopic";
import Classify from '../views/Classify/index'
import Cart from '../views/Cart/index'
import Mine from '../views/Mine/index'
import Login from "../views/Login";
import cateDetail from '../views/Detail/cateDetail.js'
import BrandDetail from "../views/Detail/brandDetail/brandDetail"; // 品牌制造商直供
const route = [
    {
        path: "/login",
        component: Login
    },
    {
        path:"/categorys/:id",
        component:cateDetail
    },
    {
        path:"/brandDetail/:id",
        component:BrandDetail
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