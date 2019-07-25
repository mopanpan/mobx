import Home from '../views/Home';
import Special from '../views/Special';
import Classify from '../views/Classify';
import ShopCar from '../views/ShopCar';
import My from '../views/My'

const route=[
    {
        path:'/home',
        component:Home
    },
    {
        path:'/special',
        component:Special
    },
    {
        path:'classify',
        component:Classify
    },{
        path:'/shopcar',
        component:ShopCar
    },{
        path:'/my',
        component:My
    },
    {
        path:'/',
        component:Home
    }
]
  
export default route