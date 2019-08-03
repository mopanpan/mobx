import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import BScroll from 'better-scroll'// eslint-disable-line
import { Link } from 'react-router-dom'
import './cateDetail.scss'
import Header from '../../../components/Header/Header.js';
import { Tabs } from 'antd-mobile'; // eslint-disable-line
// @inject('livHomeDetail')

@inject('livHomeDetail','classifyList')
@observer
class CateDetail extends Component {
  state = {
    // ind: 0,
    headTitle: "奇趣分类"
  }

  componentDidMount() {

    this.props.livHomeDetail.getNavDetailData({
      id: this.props.match.params.id
    });

    // this.bs = new BScroll(this.scrollNav, {
    //   scrollX: true,
    //   click: true,
    //   probeType: 2
    // })

    // 调用后台数据
    this.props.livHomeDetail.getManufacturer({
      categoryId: this.props.match.params.id,
      size: 1000,
      page: 1
    })

    this.props.classifyList.getDataList()//商品ID

   

    // this.props.livHomeDetail.getManufacturer(this.state.ind+1)
  }

  //  点击导航
  // clickNav({index,id,page}){
  // clickNav(index,{id,page}){
  //    this.setState({ 
  //      ind: index,
  //      pag:page
  //     })
  //    this.props.livHomeDetail.getManufacturer({
  //     categoryId:id,page:1,size:1000
  //    })
  // }

  // getBottomData({id}){
  //   console.log(id)
  //   this.props.livHomeDetail.getManufacturer({
  //     categoryId:id,page:1,size:1000
  //   })
  // }

  render() {
    let tabs = [];
    // const tabs = [
    //   { title: '1st Tab' },
    //   { title: '2nd Tab' },
    //   { title: '3rd Tab' },
    //   { title: '4th Tab' },
    //   { title: '5th Tab' },
    //   { title: '6th Tab' },
    //   { title: '7th Tab' },
    //   { title: '8th Tab' },
    //   { title: '9th Tab' },
    // ];
    // let { ind } = this.state;
    console.log(this.props)
    // let { ind } = this.state;
    console.log(this.props.classifyList.dataList.filterCategory,'68')
    console.log(this.props.livHomeDetail.navDetail.brotherCategory);
    console.log(this.props.livHomeDetail.navDetail.currentCategory);
    let { brotherCategory, currentCategory } = this.props.livHomeDetail.navDetail;
    // console.log(categoryList);
    // console.log(currentCategory);
    brotherCategory && brotherCategory.map(item => {
      return tabs.push({ title: item.name, id: item.id })
    })
    console.log(tabs)
    let { goodsList } = this.props.livHomeDetail.manufacturers;
    console.log(goodsList)
    // console.log(currentCategory.name);
    // let {goodsList} = this.props.livHomeDetail.manufacturers;
    // console.log(goodsList,'5')
    return (
      <div className="tabPageContent">
        <Header title={this.state.headTitle} />

        <div className="scrollNav" ref={scrollNav => { this.scrollNav = scrollNav }}>
          <div>
            <Tabs tabs={tabs}
              initialPage ={brotherCategory && brotherCategory.findIndex(item => item.id === this.props.match.params.id)}
              onTabClick={(tab, index) => this.handTabs(tab, index)}
              renderTabBar={ props => <Tabs.DefaultTabBar {...props} page={5} />}></Tabs>
          </div>

          {/* <ul className="nav">
            {
              brotherCategory && brotherCategory.map((item, index) => (
                <li key={item.id}
                  className={index === ind ? 'active' : ""}
                  onClick={()=>this.clickNav(index,item.id) }>{item.name}</li>
              ))
            }
          </ul> */}
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
  // 点击导航 切换数据
  handTabs(tab, index) {
    console.log(tab);
    //切换中间content内容的数据
    this.props.livHomeDetail.getNavDetailData({
      id: tab.id
    });
    // 切换图文混排的数据
    this.props.livHomeDetail.getManufacturer({ categoryId: tab.id, size: 1000, page: 1 })
  }
}

export default CateDetail;

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

/* <Tabs tabs={tabs}
initialPage={this.props.commodity.Navtab.brotherCategory && this.props.commodity.Navtab.brotherCategory.findIndex(item => item.id == this.props.match.params.id)}
onTabClick={(tab, index) => this.handTabs(tab, index)}
renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}>
</Tabs> */
