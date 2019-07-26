import React,{Component} from 'react';
import './index.scss'
import {inject, observer} from 'mobx-react';
@inject('specialDetail')
@observer

class SpecialDetail extends Component{
    componentDidMount(){
        console.log()
        this.props.specialDetail.getDataDetail()
    }
   render(){
       console.log(this.props.specialDetail.data)
       return (
           <div>
              专题详情
           </div>
       )
   }
}

export default SpecialDetail;
