import React,{Component } from 'react'
import './index.scss'
import {inject, observer} from 'mobx-react';
@inject('specialTopic')
@observer

class SpecialTopic extends Component{
    SpecialDetail=(item)=>{
     this.props.history.push(`/specialtopic/${item.id}`)
    }

    componentDidMount(){
        this.props.specialTopic.getData()
    }
    render() {
         console.log('props...', this.props.specialTopic.data);
        return (
            <div className="SpecialTopic">
               {
                   this.props.specialTopic.data&&this.props.specialTopic.data.map((item,index)=>(
                       <div key={item.id} className="BigBox" onClick={()=>this.SpecialDetail(item)}>
                           {/* <MapRoute route={this.props.route}></MapRoute> */}
                         <div className="ImgBox">
                           <img src={item.scene_pic_url} alt=""/>
                       </div>
                       <div className="TitleBox">
                           <p>{item.title}</p>
                           <p style={{color:'#ccc'}}>{item.subtitle}</p>
                           <p style={{color:'#f00'}}>{item.price_info}元起</p>
                       </div>

                       </div>
                      
                   ))
               }
            </div>
        )
    }

}

export default SpecialTopic
