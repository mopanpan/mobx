import { observable, action } from "mobx";
import {getClassify} from '../../serviers/classify'

export default class Classify{
    // @observable 修饰属性
    @observable data=[]
    // @action 修饰方法
    @action getDataClassify(type){
        console.log(type,'type')
        getClassify({id:type}).then((data)=>{
            console.log(data)
            this.data=data.data
        })
    }
}

