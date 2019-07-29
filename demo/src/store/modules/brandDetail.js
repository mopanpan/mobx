import { observable, action } from "mobx";
import { brandDetail } from '../../services/index.js'

 class BrandDetail {
    // @observable 修饰属性
    @observable branDetail = []

    // @action 修饰方法
    @action getDataDetail = async(params)=>{
       console.log(params)
       let res = await brandDetail(params);
       console.log(res)
       this.branDetail = res.data; 
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