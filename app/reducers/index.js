'use strict'

//统一管理所有的reducers，方便后期扩展维护

import { combineReducers } from 'redux'
import First from './first'


const rootReducer = combineReducers({
 	First
})

export default rootReducer