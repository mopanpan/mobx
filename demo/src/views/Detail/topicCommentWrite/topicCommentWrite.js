import React, { Component } from 'react'
import MsgHeader from '../../../components/messageHeader/msgHeader.js';
import './topicCommentWrite.scss';
import { Link } from 'react-router-dom'// eslint-disable-line
import { inject, observer } from "mobx-react";

@inject('brandDetail')
@observer
class TopicCommentWrite extends Component {
  state = {
    message: "",
    msg: "填写留言"
  }

  handleChange(e) {
    this.setState({
      message: e.target.value
    })
  }

  //点击清空
  clickEmpty() {
    this.setState({
      message: ""
    })
  }

  // 点击留言
  leaveMessage() {
    // console.log(this.state.message);
    if (!this.state.message) {//没有输入内容的话  return 终止执行
      return
    } else {//有内容添加 并且跳转页面

      // this.props.history.go(-1)
      this.props.brandDetail.addCommentList({
        content: this.state.message,
        valueId: this.props.match.params.id,
        typeId: 1,
      });
      this.props.history.go(-1);
      this.setState({
        message: ""
      })
    }


    //  this.props.history.go(-1)
    //  setTimeout(() => {
    //    if(this.props.brandDetail.code){
    //       this.props.history.go(-1);
    //    }
    //  }, 1000);
    // this.props.special.writeCommentList({content:this.state.textValue, typeId: 1, valueId:this.props.match.params.id});

    // setTimeout(()=>{
    //     if(this.props.special.code){
    //         this.props.history.go(-1)
    //     }
    // },1000)



  }

  render() {
    console.log(this.props);
    let { message } = this.state;
    console.log(message)
    return (
      <div className="message">
        <MsgHeader title={this.state.msg} />
        <div className="comment">
          <div className="textAreaContent">
            <textarea className="inputArea" cols="80" rows="10" maxLength="80"
              value={message}
              onChange={(e) => this.handleChange(e)}></textarea>
            <span className={this.state.message.length === 80 ? 'active' : ''}>{this.state.message.length} / 80</span>
          </div>
          <div className="buttons">
            <div>
              {/* style={{ display: "none" }}  onClick={this.state.message.length ?} */}
              <div className="am-button am-button-small" style={{ display: this.state.message.length ? 'block' : 'none' }}
                onClick={this.clickEmpty.bind(this)}>
                <span>清 空</span>
              </div>

              {/* { this.state.message.length ? <div className="am-button am-button-small"
                onClick={this.clickEmpty.bind(this)}>
                <span>清空</span>
              </div> : null } */}

            </div>
            <div>
              <div className="am-button am-button-primary am-button-small"
                onClick={this.leaveMessage.bind(this)}>
                <span>留 言</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TopicCommentWrite;
//onKeyDown={(e) => { e.keyCode === 13 && this.add() }}
// onkeydown(e) {
  // if(e.keyCode === 13){}
  // this.state.message.length ?
// }
// onKeyDown={(e) => this.onkeydown(e)}




