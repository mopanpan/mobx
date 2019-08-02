import { getCollectionDetail } from '../../services/collectionDetail.js';
import { observable, action } from "mobx";

class CollectionDetail{
    @observable data=[]
    // @action 修饰方法
    @action getCollectionDetailData(type){
         console.log(type)
        getCollectionDetail({id:type}).then((data)=>{
             console.log(data,'555')
            this.data=data.data
           
        })
    }
    
}
export default CollectionDetail;