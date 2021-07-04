import React from 'react'
import produce from 'immer'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import Actions from './Action'
import UserReducer from '../../Reducers/UserReducer'
import {addToName} from '../../middleware'

const reducer = combineReducers({UserReducer})
const store = createStore(reducer,applyMiddleware(addToName));
window.store = store

export default store;