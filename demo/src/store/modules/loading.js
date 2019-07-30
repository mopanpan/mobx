// import { homeData } from '../../services/home.js';
import { observable, action, autorun } from "mobx";

class Loading{
    // @observable 修饰属性
    @observable isLoading = false;

    // @action 修饰方法
    @action changeLoading(value){
      this.isLoading = value;
    
    }
    constructor(){
        autorun(()=>{
            console.log('isLoading...',this.isLoading);
        })
    }
}
export default Loading;