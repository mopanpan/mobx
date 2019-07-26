import { observable, action } from "mobx";
import {getSpecialDetail} from '../../serviers/specialDetail'

export default class SpecialDetail{
    // @observable 修饰属性
    @observable data=[]

    // @action 修饰方法
    @action getDataDetail(){
        getSpecialDetail().then((data)=>{
            console.log(data)
            // this.data=data
        })
    }
}

