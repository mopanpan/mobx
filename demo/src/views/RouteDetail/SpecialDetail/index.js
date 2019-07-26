import React, { Component } from 'react';
import './index.scss'
import { inject, observer } from 'mobx-react';
import '@/pages/font/iconfont.css'
@inject('specialDetail')
@observer

class SpecialDetail extends Component {
    componentDidMount() {
        this.props.specialDetail.getDataDetail(this.props.match.params.id)
    }
    render() {

        let propDetail = this.props.specialDetail.data
        console.log(propDetail)
        return (
            // 专题详情
            <div className="SpecialDetail">
                <div className="head">
                    <p>&lt;</p>
                    <p>{propDetail.title}</p>
                </div>
                <div className="sec">
                    <div className="ImgBox">
                    <div dangerouslySetInnerHTML={{ __html: propDetail.content }} className="topical_detail_main"></div>
                    </div>
                    {/* 评论页 */}
                    <div className="commitWrap">
                        <div className="commitWrapF">
                            <div className="titleName">精选留言</div>
                            <div className="imgName"><i className="iconfont icon-shouye"></i></div>
                        </div>
                        <div className="commitWrapS">
                            <div className="commitWrapSTop">
                                    <div className="TopName">
                                        pero
                                    </div>
                                    <div className="TopTime">
                                        2018-04-5
                                    </div>
                            </div>
                            <div className="commitWrapSDown">
                              <div>
                                  <p>jhdew </p>
                              </div>
                            </div>
                        </div>
                        
                        <div className="commitWrapT">
                            <div className="commitWrapSTop">
                                    <div className="TopName">
                                        pero
                                    </div>
                                    <div className="TopTime">
                                        2018-04-5
                                    </div>
                            </div>
                            <div className="commitWrapSDown">
                              <div>
                                  <p>jhdew </p>
                              </div>
                            </div>
                        </div>
                        
                        
                    </div>

                </div>
            </div>
        )
    }
}

export default SpecialDetail;
