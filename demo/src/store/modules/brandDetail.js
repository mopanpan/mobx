import { observable, action } from "mobx";
import { brandDetail, productDetails, relatedProducts, getDetails, comment,moreComment} from '../../services/index.js'

class BrandDetail {
   // @observable 修饰属性
   @observable branDetail = [];
   @observable proDetail = [];
   @observable relatePro = [];
   @observable getDetail = [];
   @observable getCommet = [];

   // @action 修饰方法
   @action getDataDetail = async (params) => {
      //  console.log(params)
      let res = await brandDetail(params);
      //  console.log('brand',res)
      this.branDetail = res.data;
   }
   @action getProDetail = async (params) => {
      let res = await productDetails(params);
      console.log('production', res)
      this.proDetail = res.data;
   }
   @action getRelateProData = async (params) => {
      let res = await relatedProducts(params);
      console.log('getRelateProData', res);
      this.relatePro = res.data;
   }
   @action getDetailData = async (params) => {
      let res = await getDetails(params);
      console.log('获取专题数据getDetailData',res)
      this.getDetail = res.data;
   }
   @action getCommentData = async(params)=>{
      let res = await comment(params);
      console.log('getCommentData',res);
      this.getCommet = res.data;
   }
   @action addCommentList = async(params)=>{
      let res = await moreComment(params);
      console.log(res)
   }
}

export default BrandDetail;


// class Home{
//     // @observable 修饰属性
//     @observable homes = []; // 组件里打印这个属性数据 

//     // @action 修饰方法
//     @action getHomeData = async()=>{
//        let res = await homeData();
//        this.homes = res.data;
//     }
// }