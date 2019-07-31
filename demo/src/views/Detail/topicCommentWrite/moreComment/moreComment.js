import React, { Component } from 'react'
import MsgHeader from '../../../../components/messageHeader/msgHeader.js';
import { inject, observer } from "mobx-react";
import './moreComment.scss'
@inject('brandDetail')
@observer
class MoreComment extends Component {
    state = {
        head: "查看更多评论"
    }
    componentDidMount() {
        // valueId	是	string	专题id、商品id
        // typeId	  是	string	1:专题id、0:商品id
        // this.props.brandDetail.getCommentData({
        //     valueId: this.props.match.params.id,
        //     typeId: 1,
        // });

        this.props.brandDetail.getCommentData({
            valueId: this.props.match.params.id,
            page: 1,
            size: 100,
            typeId: this.props.match.params.id.length < 6 ? 1 : 0
        })
    }
    render() {
        console.log('===============', this.props);
        let { data } = this.props.brandDetail.getCommet;
        console.log(data)
        return (
            <div className="moreComment">
                <MsgHeader title={this.state.head} />
                <div className="commentList">
                    {
                        data && data.map(item => (
                            <div className="commentItem" key={item.id}>
                                <div className="userInfo">
                                    <div>匿名用户</div>
                                    <div>{item.add_time}</div>
                                </div>
                                <div className="userComment">{item.content}</div>
                                <div className="commentPicList">
                                    {item.pic_list.map(item => <img src={item.pic_url} key={item.id} alt="" />)}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default MoreComment
