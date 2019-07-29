import React, { Component } from 'react'
import './Classify.scss'
import { inject, observer } from 'mobx-react';
@inject('classify')
@observer

class Classify extends Component {

  componentDidMount() {
    this.props.classify.moneths()
    // this.props.classify.getDataClassify(type)
  }

  render() {

    console.log(this.props.classify.monrtList, '99')



    return (
      <div className="ClassifyPage">
        <div className="header">
          <p>
            <input type="text" placeholder="搜索商品，公11111件好物" />
          </p>
        </div>
        <div className="ClassiySec">
      
          <div className="SecLeft">
           {
             this.props.classify.monrtList&&this.props.classify.monrtList.map(item=>(
               <li key={item.id}>{item.name}</li>
             ))
           }

          </div>

          <div className="SecRight">
              {/* {
                this.props.classify.monrtList&&this.props.classify.monrtList.map(item=>(
                  <div>
                        <div className="banner">
                           
                        </div>

                        <div className="RightBox">
                        </div>

                  </div>
                ))
              } */}
           
          </div>
          </div>
          
      
      </div>
    )
  }
}




export default Classify
