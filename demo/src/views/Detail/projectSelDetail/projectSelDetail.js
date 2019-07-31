import React, { Component } from 'react'
import { inject, observer } from "mobx-react";
import Header from '../../../components/Header/Header.js'
import './projectSelDetail.scss';
import { Link } from 'react-router-dom'
import '../../../pages/font/iconfont.css'
@inject('brandDetail')
@observer
class ProjectSelDetail extends Component {
  componentDidMount() {
    this.props.brandDetail.getDetailData({
      id: this.props.match.params.id
    })
    // valueId	是	string	专题id、商品id
    // typeId	  是	string	1:专题id、0:商品id
    this.props.brandDetail.getCommentData({
      valueId: this.props.match.params.id,
      typeId: 1,
      // size: 100,
      // page: 1
    })
  }
  commentDetail(id) {
    this.props.history.push(`/topicCommentWrite/${id}`)
  }

  render() {
    console.log(this.props)
    console.log(this.props.brandDetail.getDetail);
    let { getDetail } = this.props.brandDetail;
    // console.log(getDetail);
    // console.log(this.props.brandDetail.getDetail)
    let { data } = this.props.brandDetail.getCommet;
    // console.log(data);
    return (
      <div className="projectSelDetail">
        <Header title={getDetail && getDetail.title} />
        <div className="topicDetailImg"
          dangerouslySetInnerHTML={{ __html: this.props.brandDetail.getDetail && this.props.brandDetail.getDetail.content }}>
        </div>

        <div className="commentWrap">
          <div className="titleLine">
            <div className="titleName">精选留言</div>
            <div className="titleIcon" onClick={this.commentDetail.bind(this, this.props.match.params.id)}>
              <i className="iconfont icon-changyonggoupiaorenbianji">
                {/* :before */}
              </i>
            </div>
          </div>

          <div className="commentList">
            {
              data && data.map(item => (
                <div className="commentItem" key={item.id}>
                  <div className="userInfo">
                    <div>匿名用户</div>
                    <div>{item.add_time}</div>
                  </div>
                  <div className="userComment">{item.content}</div>
                  <div className="commentPicList"></div>
                </div>
              ))
            }

          </div>
          <Link className="moreComment" to={`/moreComment/${this.props.match.params.id}`}>查看更多评论</Link>
        </div>

      </div>
    )
  }
}

export default ProjectSelDetail
// icon-pencil
// icon-edit