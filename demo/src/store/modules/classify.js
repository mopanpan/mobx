import { observable, action } from "mobx";
import {getClassify,monet} from '../../services/classify'

export default class Classify{
    // @observable 修饰属性
    @observable data=[]
    @observable monrtList=[]
    // @action 修饰方法
    @action moneths(){
        monet().then((res)=>{
            this.monrtList=res.data.categoryList
        })
    }
    @action getDataClassify(type){
        getClassify({id:type}).then((data)=>{
            this.data=data.dat
        })
    }
}

