import { observable, action } from "mobx";
import {getCollection} from '../../services/collection'

export default class Collection{
    @observable data=[]
    // @action 修饰方法
    @action getCollectionData(type){
        console.log(type)
        getCollection(type).then((data)=>{
            console.log(data,'222')
            this.data=data.data
        })
    }
}

