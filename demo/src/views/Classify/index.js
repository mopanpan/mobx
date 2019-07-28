import React, { Component } from 'react'
import './Classify.scss'
import {inject, observer} from 'mobx-react';
@inject('classify')
@observer

class Classify extends Component {
      componentDidMount(){
         this.props.classify.getDataClassify()
      }
       //点击左侧切换右侧
       ShowRight=(id)=>{
        console.log(id)
        //  this.props.classify.data.currentCategory//右侧数据
        this.props.classify.getDataClassify(id)
        if(id==1005000){
          let RightData=this.props.classify.data.currentCategory
        }
    }
   
  render() {
    const ll=this.props.classify.data.categoryList
    // this.props.classify.data.currentCategory
    //  console.log(this.props.classify.data,'22222')
    

    
    return (
      <div className="ClassifyPage">
          <div className="header">
            <p>
              <input type="text" placeholder="搜索商品，公11111件好物"/>
            </p>
          </div>
          <div className="ClassiySec">
              <div className="SecLeft">
                {
                 this.props.classify.data.categoryList&&this.props.classify.data.categoryList.map(item=>(
                    <li key={item.id} onClick={()=>this.ShowRight(item.id)}>{item.name}</li>
                  ))
                }
              </div>

              <div className="SecRight">
                            {/* <p>--{item.name}--</p> */}
                            <div className="RightBox">
                              {/* {
                                 item.subCategoryList.map(value=>(
                                   <dl>
                                     <dt>
                                       <img src={value.wap_banner_url} alt=""/>
                                     </dt>
                                     <dd>{value.name}</dd>
                                   </dl>
                                 ))
                              }
                               */}
                              
                            </div>
                  </div>
              


          </div>
      </div>
    )
  }
}

export default Classify
