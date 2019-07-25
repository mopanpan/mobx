import Index from "../pages";
import Home from "../views/Home";
import SpecialTopic from "../views/SpecialTopic";
import Classify from '../views/Classify/index'
import Cart from '../views/Cart/index'
import Mine from '../views/Mine/index'

const route = [
     {
         path:"/",
         component:Index,
         children:[
             {
                 path:"/home",
                 component:Home,
             },
             {
                path:"/specialtopic",
                component:SpecialTopic
            },
            {
                path:"/classify",
                component:Classify
            },
            {
                path:"/cart",
                component:Cart
            },
            {
                path:"/mine",
                component:Mine
            },
            {
                from:"/",
                to:"/home"
            }
         ]
     }
]
export default route;