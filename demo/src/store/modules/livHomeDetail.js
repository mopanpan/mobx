// import { livingHomeDetail, Manufacturer } from '../../services/home.js';
import { livingHomeDetail, Manufacturer } from '../../services/index.js';
import { observable, action } from "mobx";

class LivHomeDetail{
    // @observable 修饰属性
    @observable navDetail = {}; // 组件里打印这个属性数据 
    @observable manufacturers = {};
    // @action 修饰方法
    @action getNavDetailData = async(params)=>{
        console.log('parsss',params)
        let res =  await livingHomeDetail(params);
        console.log('resss',res)
        this.navDetail = res.data;      
    }

    @action getManufacturer = async({categoryId,page,size})=>{
        let data = await Manufacturer({categoryId,page,size});
        console.log('90909090',data)    
        this.manufacturers = data.data;
        // console.log('808080',this.manufacturers)
     }


}
export default LivHomeDetail;













// import { livingHomeDetail, Manufacturer } from '../../services/home.js';
// import { observable, action } from "mobx";

// class LivHomeDetail{
//     // @observable 修饰属性
//     @observable navDetail = []; // 组件里打印这个属性数据 
    
//     // constructor(){
//     //     this.navDetail = [];
//     // }
    
//     // @action 修饰方法
//     @action getNavDetailData(){
//         livingHomeDetail().then(res=>{
//             console.log('navDetailres',res.data)
//             this.navDetail = res.data;
//         })
//     }
// }
// export default LivHomeDetail;