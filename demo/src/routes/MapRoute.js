import React from 'react'
import {Route,Switch,Redirect} from 'react-router-dom';

const MapRoute =props=>(
    <Switch>
       {
         props.route.map(Item=>(
          Item.path ? (
         <Route 
          key={Item.path}
          path={Item.path} 
          render={props=><Item.component {...props} route={Item.children}></Item.component>} />)  
          :<Redirect {...Item} key={Item.from} />
        )
       )
      } 
   </Switch>
)

export default MapRoute;

// route.config.js 默认抛出的没有名字
// const MapRoute =(props)=>(
//     <Switch>
//        {
//         props.route.map(item=>{
//           item.path ? (
//           <Route 
//           key={item.path}
//           path={item.path} 
//           render={props=><item.component {...props}></item.component>} />)  
//           :<Redirect key={item.key} />
//         })
//        } 
//    </Switch>
// )