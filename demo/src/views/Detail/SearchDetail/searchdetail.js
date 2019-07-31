import React, { Component } from 'react'
import './searchdetail.scss';
import {inject, observer} from 'mobx-react';
@inject('searchHelper')
@observer
class SearchHelper extends Component {
     
    state={
        flag:true
    }
    //向前条一页
    toback=()=>{
        this.props.history.goBack(-1)
    }
    //点击取消搜索框显示
    keywordShow=()=>{
     
    }
    getKeyword=(item)=>{
        // console.log(keyword)
         this.props.history.push(`/newDetail/${item.keyword}`)
         this.props.searchHelper.getGoodsData(item)
    }

    deleteTa=()=>{
       this.props.searchHelper.data.historyKeywordList=""
    }

    // changeTa=(e)=>{
    //     console.log(e)
    // }
    componentDidMount(){
        this.props.searchHelper.getSearchData()
    }
    render() {
       
        return (
            <div className="SearchPage">
               <div className="SearchHead">
                   <p style={{fontSize:'0.5rem'}} onClick={this.toback}>
                      &lt; 
                   </p>
                   <p>
                       <i className="iconfont icon-sousuo"></i>    
                       <input type="text" placeholder="520元礼包抢先领" />
                   </p>
                   <p onClick={this.keywordShow}>取消</p>
               </div>
               
                  <div className="searchSec">
                      <div className="searchShow" >
                            <div className="searchTop">
                                <p><span>历史纪录</span><i className="iconfont changyonggoupiaorenshanchu" onClick={this.deleteTa}></i></p>
                                <div className="historyNum">
                                {
                                    this.props.searchHelper.data.historyKeywordList&&this.props.searchHelper.data.historyKeywordList.map((item,index)=>(
                                      <span key={index}>{item}</span>
                                    ))
                                }
                                </div>
                            </div>
                            <div className="searchDown">
                                <p>热门搜索</p>
                                <div className="hotNum">
                                {
                                    this.props.searchHelper.data.hotKeywordList&&this.props.searchHelper.data.hotKeywordList.map((item,index)=>(
                                        <span key={index} onClick={()=>this.getKeyword(item)}>{item.keyword}</span>
                                    ))
                                }
                                </div>
                            </div>
                      </div>
                     
                  </div>
              
            </div>
        )
    }
}

export default SearchHelper
