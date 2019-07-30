import { observable, action } from "mobx";
import { brandDetail, productDetails, relatedProducts } from '../../services/index.js'

 class BrandDetail {
    // @observable 修饰属性
    @observable branDetail = [];
    @observable proDetail = [];
    @observable relatePro = [];
    // @action 修饰方法
    @action getDataDetail = async(params)=>{
      //  console.log(params)
       let res = await brandDetail(params);
      //  console.log('brand',res)
       this.branDetail = res.data;  
    }
    @action getProDetail = async(params)=>{
       let res = await productDetails(params);
       console.log('production',res)
       this.proDetail = res.data;
    }
    @action getRelateProData = async(params)=>{
       let res = await relatedProducts(params);
       console.log('getRelateProData',res);
       this.relatePro = res.data;
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