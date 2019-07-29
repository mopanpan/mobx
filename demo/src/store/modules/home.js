import { homeData } from '../../services/home.js';
import { observable, action } from "mobx";

class Home{
    // @observable 修饰属性
    @observable homes = []; // 组件里打印这个属性数据 
    // constructor(){
    //     this.homes = [];
    // }
    // @action 修饰方法
    @action getHomeData = async()=>{
       let res = await homeData();
       this.homes = res.data;
        // homeData().then(res=>{
        //     console.log('res',res.data)
        //     this.homes = res.data;
        // })
    }

    // @action getHomeData(){
    //     homeData().then(res=>{
    //         console.log('res',res.data)
    //         // this.homes = res.data;
    //         this.homes = res.data;
    //     })
    // }
}
export default Home;