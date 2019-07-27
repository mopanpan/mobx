import React, { Component } from 'react'
import {inject, observer } from 'mobx-react'

@inject('livHomeDetail')
@observer
class CateDetail extends Component {
  componentDidMount(){
        this.props.livHomeDetail.getNavDetailData();
  }
  render() {
    console.log(this.props)
    console.log(this.props.livHomeDetail);
    console.log(this.props.livHomeDetail.navDetail.currentCategory);
    let {categoryList,currentCategory} = this.props.livHomeDetail.navDetail;
    console.log(categoryList);
    console.log(currentCategory);
    return (
      <div>
         <div>
           {/* <span><</span> */}
           <span>奇趣分类</span>
           <span></span>
         </div>
         {

          //  currentCategory && currentCategory.map(item=>(
              
          //  ))
          
         }
          居家详情

      </div>
    )
  }
}

export default CateDetail
