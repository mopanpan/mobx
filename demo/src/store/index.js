// 引入模块
// 首页
import Login from './modules/login';
import Loading from './modules/loading.js'
import Home from './modules/home.js';
import Classify from './modules/classify.js';
import LivHomeDetail from './modules/livHomeDetail.js' // 首页居家详情
import BrandDetail from './modules/brandDetail.js';//制造商id 详情

// 专题
import SpecialTopic from './modules/specialTopic'//专题页
import SpecialDetail from './modules/specialDetail'//专题详情
import SpecialDetailList from './modules/specialDetailList'//专题详情评论
import ClassifyHead from './modules/classifyhead'//头部总数
import ClassifyList from './modules/classify'//点dl跳详情
import SearchHelper from './modules/searchHelper'//搜索页
import Collection from './modules/collection.js';//我的收藏
import CollectionDetail from './modules/collectionDetail.js';//我的收藏详情
import Address from './modules/address.js';
//购物车页
import Cart from './modules/cart.js';


// 实例化模块
// 首页实例化
const loading = new Loading();
const home = new Home();
const classify = new Classify();
const livHomeDetail = new LivHomeDetail();
const brandDetail = new BrandDetail()
const login = new Login()


// 专题实例化
const specialTopic = new SpecialTopic();
const specialDetail = new SpecialDetail();
const specialDetailList = new SpecialDetailList();
const classifyhead = new ClassifyHead();
const classifyList = new ClassifyList();
const searchHelper = new SearchHelper();
const address = new Address();



//购物车页实例化
const cart = new Cart();
const collection=new Collection()
const collectionDetail=new CollectionDetail()

export default {
    login,
    loading,
    home,
    classify,
    specialTopic,
    specialDetail,
    livHomeDetail,
    specialDetailList,
    collection,
    collectionDetail,
    classifyhead,
    classifyList,
    searchHelper,
    brandDetail,
    cart,
    address

}