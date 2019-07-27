import { observable, action } from "mobx";
import {getSpecialTopic} from '../../services/specialTopic'

export default class SpecialTopic{
    // @observable 修饰属性
    @observable data=[]
    // @action 修饰方法
    @action getData(){
        getSpecialTopic().then((data)=>{
            console.log(data)
            this.data=data.data.data
        })
    }
}

