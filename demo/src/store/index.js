// 引入模块
// 首页
import Home from './modules/home'
import Classify from './modules/classify.js';
import LivHomeDetail from './modules/livHomeDetail.js' // 首页居家详情




// 专题
import SpecialTopic from './modules/specialTopic'//专题页
import SpecialDetail from './modules/specialDetail'//专题详情


import SpecialDetailList from './modules/specialDetailList' //专题详情评论
// 实例化模块
// 首页实例化
const home = new Home();
const classify = new Classify();
const livHomeDetail = new LivHomeDetail();

// 专题实例化
const specialTopic = new SpecialTopic();
const specialDetail = new SpecialDetail();
const specialDetailList = new SpecialDetailList();
// const classify = new Classify();

export default{
    home,
    classify,
    specialTopic,
    specialDetail,
    livHomeDetail,
    specialDetailList
}