import { observable, action } from "mobx";


import {getClassify,monet,getClassifyList} from '../../services/classify'


export default class Classify{
    // @observable 修饰属性
    @observable data=[]
    @observable monrtList=[]
    @observable dataList=[]
    // @action 修饰方法
    @action moneths(){
        monet().then((res)=>{
            this.monrtList=res.data.categoryList
        })
    }
    @action getDataClassify(type){
        getClassify({id:type}).then((data)=>{
        //   console.log(data)
            this.data=data.data.currentCategory
        })
    }

    @action getDataList(type){
        console.log(type,'444444')
        getClassifyList(type).then((data)=>{
          console.log(data)
            this.dataList=data.data
        })
    }
}

