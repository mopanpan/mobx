import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom';
import {MapRoute,route} from './routes/index.js'
export class App extends Component {
  render() {
    return (
      <BrowserRouter>
         <MapRoute route={route}></MapRoute>
      </BrowserRouter>
    )
  }
}

export default App;
