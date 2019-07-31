import React, { Component } from 'react';
import './Collection.scss'
import { inject, observer } from 'mobx-react';
@inject('collection', 'collectionDetail')
@observer

class Collection extends Component {
    //向前走一次
    toback = () => {
        this.props.history.goBack(-1)
    }
    //调转详情传id
    toCollectionDetail = (item) => {
        console.log(item)
        this.props.collectionDetail.getCollectionDetailData(item)
        this.props.history.push(`/collectDetail/${item}`)
    }

    componentDidMount() {
        this.props.collection.getCollectionData({ typeId: 0 })
    }


    render() {
        console.log(this.props.collection.data, '222')
        return (
            <div className="collectionPage">
                <div className="SearchHead">
                    <p style={{ fontSize: '0.5rem' }} onClick={this.toback}>
                        &lt;
                   </p>
                    <p>
                        easyLikeGoods
                   </p>
                </div>

                <div className="collectionSec">
                    {
                        this.props.collection.data && this.props.collection.data.map(item => (
                            <dl key={item.value_id} onClick={() => this.toCollectionDetail(item.value_id)}>
                                <dt>
                                    <img src={item.list_pic_url} alt="" />
                                </dt>
                                <dd>
                                    <h5>{item.name}</h5>
                                    <p>{item.goods_brief}</p>
                                    <p style={{ color: '#f00' }}>￥{item.retail_price}</p>
                                </dd>
                            </dl>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Collection
