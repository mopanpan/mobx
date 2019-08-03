import React, { Component } from 'react'
import './Classify.scss'
import { inject, observer } from 'mobx-react';
@inject('classify', 'classifyList', 'classifyhead')
@observer

class Classify extends Component {
  

  clickDl = (item) => {
    // console.log(item)
    this.props.classifyList.getDataList(item)
    this.props.history.push(`/cateDetail/${item.id}`)
  }

  toSearch = () => {

    this.props.history.push('/SearchDetail');
  }

  componentDidMount() {
    this.props.classify.moneths()
    this.props.classifyhead.getDataClassifyHead()
  }

  render() {

  
    // console.log(this.props.classifyhead.data,'count')//获取件数
    // console.log(this.props,'555')

   
    // console.log(this.props.classifyhead.data,'count')//获取件数
    const banner=this.props.classify.data
    //  const {activeCatalogMsg}=this.props



    return (
      <div className="ClassifyPage">
        <div className="header">
          <p onClick={this.toSearch}>
            {`搜索商品，共${this.props.classifyhead.data}件好物`}
          </p>
        </div>
        <div className="ClassiySec">

          <div className="SecLeft">
            {
              this.props.classify.monrtList && this.props.classify.monrtList.map(item => {
                return <li key={item.id} onClick={() => {  
                  this.props.classify.getDataClassify(item.id) 
                }}>{item.name}</li>
              })
            }

          </div>
          <div className="SecRight">

           


            <div className="banner" 
             style={{backgroundImage:`url(${banner.wap_banner_url})`}}
            >
               {banner.front_name}

            </div>
            <div className="ImgBox">
              {
                this.props.classify.data.subCategoryList && this.props.classify.data.subCategoryList.map(item => (
                  <dl key={item.id} onClick={() => this.clickDl(item)}>
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
