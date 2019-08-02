import React, { Component } from 'react';
import './newdetail.scss'
import { inject, observer } from 'mobx-react';
@inject('searchHelper')
@observer
class PaixunDetail extends Component {

    //向前条一页
    toback = () => {
        this.props.history.goBack(-1)
    }
    render() {
        console.log(this.props.searchHelper.data, '5555')
        return (
            <div className="SearchPage">
                <div className="SearchHead">
                    <p style={{ fontSize: '0.5rem' }} onClick={this.toback}>
                        &lt;
                   </p>
                    <p>
                        <i className="iconfont icon-sousuo"></i>
                        <input type="text" placeholder="520元礼包抢先领" />
                    </p>
                    <p onClick={this.keywordShow}>取消</p>
                </div>

                <div className="searchSec">
                    {
                        this.props.searchHelper.data.goodsList && this.props.searchHelper.data.goodsList.map(item => (
                            <dl key={item.id}>
                                <dt>
                                    <img src={item.list_pic_url} alt="" />
                                </dt>
                                <dd>
                                    <p>{item.name}</p>
                                    <p style={{ color: '#f00' }}>{item.retail_price}</p>
                                </dd>
                            </dl>
                        ))
                    }
                </div>

            </div>
        )
    }
}

export default PaixunDetail
