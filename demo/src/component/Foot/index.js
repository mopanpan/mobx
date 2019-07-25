import React,{Component} from 'react';

import {NavLink} from 'react-router-dom';
import styles from './index.scss'
class Foot extends Component{
   render(){
       return(
          <div className={styles.Foot}>
              <ul>
                   <NavLink to="/home" tag="li">首页</NavLink>
                    <NavLink to="/special" tag="li">专题</NavLink>
                    <NavLink to="/classify"tag="li">分类</NavLink>
                    <NavLink to="/shopcar" tag="li">购物车</NavLink>
                    <NavLink to="/my" tag="li">我的</NavLink>
              </ul>
               
          </div>
       )
   }
}



export default Foot