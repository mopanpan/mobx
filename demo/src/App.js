import React, { Component } from 'react'
import { HashRouter } from 'react-router-dom';//BrowserRouter
import { MapRoute, route } from './routes/index.js'
// 引入全局的scss样式
// import './pages/global.scss';
import './components/Loading/Loading.scss'
// import './pages/reset.scss'
// 引入全局的loading
import Loading from './components/Loading/Loading.js'

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HashRouter>
          <MapRoute route={route}></MapRoute>
        </HashRouter>
        <Loading />
      </React.Fragment>
    )
  }
}

export default App;
