// 引入模块
import Home from './modules/home'
import Classify from './modules/classify.js';

import SpecialTopic from './modules/specialTopic'//专题页
import SpecialDetail from './modules/specialDetail'//专题详情
// 实例化模块
const home = new Home();
const classify = new Classify();
const specialTopic = new SpecialTopic();
const specialDetail = new SpecialDetail();


export default{
    home,
    classify,
    specialTopic,
    specialDetail
   
}