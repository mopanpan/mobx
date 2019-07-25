import React, { Component } from 'react';
import {connect} from 'mobx'
import './index.scss'
import {inject,observer} from "mobx-react"
@inject("store")
 //响应observable,state值变化，视图中的observable 及computed数据会同步变化
@observer
class Home extends Component {
    render() {
        return (
            <div className="home">
                首页
           </div>
        )
    }
}


export default connect()(Home);
