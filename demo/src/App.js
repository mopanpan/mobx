import React, { Component } from 'react';

import {BrowserRouter} from 'react-router-dom'
import {MyRouter,route} from './Router'
class App extends Component {
  

  render() {
    return (
      <BrowserRouter>
         <MyRouter route={route}>

         </MyRouter>
      
      </BrowserRouter>
   
    );
  }
}

export default App;
