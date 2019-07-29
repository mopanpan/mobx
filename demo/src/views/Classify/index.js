import React, { Component } from 'react'
import './Classify.scss'
import { inject, observer } from 'mobx-react';
@inject('classify','classifyList')
@observer

class Classify extends Component {
  state = {
    RightData: null,
  }

  clickDl=(item)=>{
    
    console.log(item,'111')
    this.props.classifyList.getDataList(item)
    this.props.history.push(`/cateDetail/${item.id}`)
  }
  componentDidMount() {
    this.props.classify.moneths()
  // this.props.classifyhead.getDataClassifyHead()
   
  }

  render() {
    let { RightData } = this.state
      //console.log(this.props.classifyhead.data.defaultKeyword)//获取件数
      console.log(this.props,'555')



    return (
      <div className="ClassifyPage">
        <div className="header">
          <p>
            <input type="text" placeholder="搜索商品，公1111件好物" />
          </p>
        </div>
        <div className="ClassiySec">

          <div className="SecLeft">
            {
              this.props.classify.monrtList && this.props.classify.monrtList.map(item => {
               return  <li key={item.id} onClick={() => {
                    this.props.classify.getDataClassify(item.id); {
                      RightData = this.props.classify
                      console.log(RightData)
                    }
                }}>{item.name}</li>
              })
            }

          </div>
          <div className="SecRight">
               <div className="banner">
                  
               </div>
            <div className="ImgBox">
              {
                this.props.classify.data.subCategoryList && this.props.classify.data.subCategoryList.map(item => (
                  <dl key={item.id} onClick={()=>this.clickDl(item)}>
                    <dt>
                      <img src={item.wap_banner_url} alt="" />
                    </dt>
                    <dd>{item.name}</dd>
                  </dl>
                ))
              }
            </div>


          </div>
         

            </div>
      </div>
    )
  }
}




export default Classify
