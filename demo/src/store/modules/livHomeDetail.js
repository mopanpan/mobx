import { livingHomeDetail } from '../../services/home.js';
import { observable, action } from "mobx";

class LivHomeDetail{
    // @observable 修饰属性
    @observable navDetail; // 组件里打印这个属性数据 
    constructor(){
        this.navDetail = [];
    }
    
    // @action 修饰方法
    @action getNavDetailData(){
        livingHomeDetail().then(res=>{
            console.log('navDetailres',res.data)
            this.navDetail = res.data;
        })
    }
}
export default LivHomeDetail;