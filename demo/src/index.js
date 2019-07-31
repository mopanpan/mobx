import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.js';
import 'antd/dist/antd.css';

//引入mobx
import { Provider } from 'mobx-react'
import store from './store/index.js'
import 'antd-mobile/dist/antd-mobile.css'
//引入fastclick,解决300ms延迟
var FastClick = require('fastclick');
FastClick.attach(document.body);

ReactDOM.render(<Provider {...store}>
        <App />
</Provider>, document.getElementById('root'));


