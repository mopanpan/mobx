import React, { Component } from 'react'
import {inject, observer} from 'mobx-react';
@inject('collection')
@observer

class Collection extends Component {
    // componentDidMount(typeId,size){
    //     this.props.collection.getCollectionData({typeId:0,size:1000})
    // }
    render() {
         console.log(this.props,'222')
        return (
            <div>
              我的收藏
               
              
            </div>
        )
    }
}

export default Collection
