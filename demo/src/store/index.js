// 引入模块
import Home from './modules/home'
import Classify from './modules/classify.js';

// 实例化模块
const home = new Home();
const classify = new Classify();
export default{
    home,
    classify
}