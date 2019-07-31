import { observable, action } from "mobx";
import {getclassifyHead} from '../../services/classifyhead'

export default class ClassifyHead{
    // @observable 修饰属性
    @observable data=[]
    // @action 修饰方法
    @action getDataClassifyHead(){
        getclassifyHead().then((data)=>{
             console.log(data)
            this.data=data.data.goodsCount
        })
    }
}

