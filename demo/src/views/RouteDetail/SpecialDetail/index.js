import React, { Component } from 'react';
import './index.scss'
import { inject, observer } from 'mobx-react';
import '@/pages/font/iconfont.css'
@inject('specialDetail', 'specialTopic', 'specialDetailList')
@observer

class SpecialDetail extends Component {

    componentDidMount() {
        this.props.specialTopic.getData()
        this.props.specialDetail.getDataDetail(this.props.match.params.id)
        this.props.specialDetailList.getDataDetailList(this.props.match.params.id)
    }
    Topic = (item) => {
        this.props.history.push(`/specialtopic/${item.id}`)
    }
    toBack = () => {
        this.props.history.goBack(-1)
    }
    commit=(item)=>{
        console.log(item)
        this.props.history.push(`/moreComment/${item}`)
    }

    render() {
        //this.props.specialTopic.data
        let propDetail = this.props.specialDetail.data
        let seeDownShow = this.props.specialDetailList.data.data
        return (
            // 专题详情
            <div className="SpecialDetail">
                <div className="head">
                    <p onClick={this.toBack}>&lt;</p>
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
                        {
                            seeDownShow && seeDownShow.map(item => (
                                <div key={item.id} className="newBox">

                                    <div className="commitWrapS">
                                        <div className="commitWrapSTop">
                                            <div className="TopName">
                                                pero
                                                    </div>
                                            <div className="TopTime">
                                                {item.add_time}
                                            </div>
                                        </div>
                                        <div className="commitWrapSDown">
                                            <div>
                                                <p>{item.content} </p>
                                            </div>
                                        </div>
                                       
                                    </div>
                                   
                                </div>
                                
                            ))
                           
                        }
                    </div>
                    <p style={{ width: '100%', height: '0.1rem', lineHeight: '1rem', textAlign: 'center' }}>推荐专题</p>
                    <div className="NewImgBox">

                        {
                            this.props.specialTopic.data && this.props.specialTopic.data.map(item => (
                                <div key={item.id} onClick={() => this.Topic(item)}>
                                    <div className="DownImg">
                                        <img src={item.scene_pic_url} alt="" />
                                    </div>
                                    <p>{item.title}</p>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}


export default SpecialDetail;
