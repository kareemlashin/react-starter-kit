import { applyMiddleware, combineReducers, compose, createStore } from 'redux'

import { initialState } from './../state/state.js'
import thunk from 'redux-thunk'

const reducers = (state = initialState, action) => {
  if (action.type == '1') {
    return {
      ...state,
      roles: action.roles,
    }
  }
  if (action.type == '2') {
    return {
      ...state,
      gets: action.gets,
    }
  } else {
    return {
      ...state,
    }
  }
}
const root = combineReducers({
  reducers: reducers,
})
export default createStore(root, compose(applyMiddleware(thunk)))
