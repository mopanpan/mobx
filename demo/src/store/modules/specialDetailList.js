import { observable, action } from "mobx";
import { getSpecialDetailList } from '@/services/specialDetailList'

export default class SpecialDetailList {
    // @observable 修饰属性
    @observable data = []

    // @action 修饰方法
    @action getDataDetailList(type) {
        // console.log(type)
        getSpecialDetailList({valueId:type,typeId:1}).then((data) => {
            //console.log(data,'data')
            this.data = data.data
        })
    }
}

