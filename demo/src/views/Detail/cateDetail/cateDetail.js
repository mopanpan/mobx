import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import BScroll from 'better-scroll'
import { Link } from 'react-router-dom'
import './cateDetail.scss'
import Header from '../../../components/Header/Header.js';

@inject('livHomeDetail','classifyList')
@observer
class CateDetail extends Component {
  state = {
    ind: 0,
    headTitle:"奇趣分类",
    pag:0,
    currentCategoryid:0
  }

  componentDidMount() {

    this.props.livHomeDetail.getNavDetailData({
      id:this.props.match.params.id
    });

    this.props.classifyList.getDataList()//商品ID

    this.bs = new BScroll(this.scrollNav, {
      scrollX: true,
      click: true,
      probeType: 2
    })

    this.props.livHomeDetail.getManufacturer(this.state.ind+1)
   console.log(this.props.classifyList,'2222222222222')
  }

  //  点击导航
  // clickNav({index,id,page}){
  clickNav(index,{id,page}){
    // console.log(index+1)
    // console.log({id});
    // if(this.state.currentCategoryid! ===id){

    // }
     this.setState({ 
       ind: index,
       pag:page
      })
     this.props.livHomeDetail.getManufacturer({
      categoryId:id,page:1,size:1000
     })

    // this.getBottomData({id})
  }

  // getBottomData({id}){
  //   console.log(id)
  //   this.props.livHomeDetail.getManufacturer({
  //     categoryId:id,page:1,size:1000
  //   })
  // }

  render() {
    let { ind } = this.state;
    console.log(this.props)
    console.log(this.props.livHomeDetail.navDetail.brotherCategory);
    console.log(this.props.livHomeDetail.navDetail.currentCategory);
    let { brotherCategory, currentCategory } = this.props.livHomeDetail.navDetail;
    // console.log(categoryList);
    // console.log(currentCategory);
    // console.log(currentCategory.name);
    let {goodsList} = this.props.livHomeDetail.manufacturers;
    console.log(goodsList,'5')
    return (
      <div className="tabPageContent">
        <Header title={this.state.headTitle} />
        
        <div className="scrollNav" ref={scrollNav => { this.scrollNav = scrollNav }}>
          <ul className="nav">
            {
              brotherCategory && brotherCategory.map((item, index) => (
                <li key={item.id}
                  className={index === ind ? 'active' : ""}
                  onClick={()=>this.clickNav(index,item.id) }>{item.name}</li>
              ))
            }
          </ul>
        </div>


        <div className="categoryDetail">
          <div>{currentCategory && currentCategory.name}</div>
          <div>{currentCategory && currentCategory.front_name}</div>
        </div>

        <div className="goodsList">
          <div className="goodsLists">
            {
              goodsList && goodsList.map(val => (
                <Link className="goodsItem" to="" key={val.id}>
                   <div className="goodsItemImg"><img src={val.list_pic_url} alt="" /></div>
                   <div className="goodsItemName">{val.name}</div> 
                   <div className="goodsItemPrice">￥{val.retail_price}元</div> 
                 </Link>
               ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default CateDetail
// {
//   categoryList && categoryList.map(item => (
//      <div className="categoryDetail" key={item.id}>
//        <div>{item.name}</div>
//        <div>{item.front_desc}</div>
//      </div>
//    ))
//  }

/* <div className="goodsItemImg"><img src={val.banner_url} alt="" /></div>
 <div className="goodsItemName">{val.front_name}</div> */
/* <div className="goodsItemPrice">{val}</div> */