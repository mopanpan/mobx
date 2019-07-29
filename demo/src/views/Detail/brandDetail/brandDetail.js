import React, { Component } from 'react'
import Header from '../../../components/Header/Header.js'
import { inject, observer } from "mobx-react"
import './brandDetail.scss'

@inject('brandDetail')
@observer
class BrandDetail extends Component {
 
  componentDidMount() {
    this.props.brandDetail.getDataDetail({
      id: this.props.match.params.id
    })

  }
  render() {//branDetail    .brand
    let { brand } = this.props.brandDetail.branDetail;
    // console.log(brand)
    // console.log(this.props);
    return (
      <div className="brand">
        <Header title={brand && brand.name} />

       <div className="brands">
        <div className="brandDetail">
          <img src={brand && brand.new_pic_url} alt="" />
          <div className="breadDesc">
              {brand && brand.simple_desc}
          </div>
        </div>

        <div className="brandGoodsList">
          <div className="goodsListWrap"></div>
          <div className="goodsList"></div>
        </div>
      </div>
      </div>
    )
  }
}

export default BrandDetail
