import { observable, action } from "mobx";
import { getSearchHelper,getSearchGoods } from '../../services/searchHelper'

export default class SearchHelper {
    // @observable 修饰属性
    @observable data = []
    @observable Goodsdata = []
    // @action 修饰方法
    @action getSearchData() {
        getSearchHelper().then((data) => {
            //  console.log(data)
            this.data = data.data
        })
    }
    @action getGoodsData(type) {
        console.log(type)
        getSearchGoods(type).then((data) => {
             console.log(data)
            this.data = data.data
        })
    }
}

