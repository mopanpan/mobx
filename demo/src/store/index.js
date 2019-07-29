// 引入模块
import Home from './modules/home'

import SpecialTopic from './modules/specialTopic'//专题页
import SpecialDetail from './modules/specialDetail'//专题详情
import SpecialDetailList from './modules/specialDetailList'//专题详情评论

import Classify from './modules/classify'//分类
import ClassifyHead from './modules/classifyhead'//头部总数
import ClassifyList from './modules/classify'//点dl跳详情
// 实例化模块
const home = new Home();
const classify = new Classify();
const specialTopic = new SpecialTopic();
const specialDetail = new SpecialDetail();
const specialDetailList = new SpecialDetailList();
const classifyhead = new ClassifyHead();//还没做
const classifyList = new ClassifyList();

export default{
    home,
    classify,
    specialTopic,
    specialDetail,
    specialDetailList,
    classifyhead,
    classifyList
}