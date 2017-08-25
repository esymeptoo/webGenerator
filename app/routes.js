import React from 'react'
import { Router, Route, Link, hashHistory, IndexRedirect, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import App from './containers/App/App'
import configureStore from './store'

//这里IndexRoute入在根app下后，就是在App页面组件的props.children
//匹配规则参考官方文档
export default (
  <Route path="/" component={App}>
    
  </Route>
)