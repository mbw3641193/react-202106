// import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createStore, combineReducers, applyMiddleware } from '../myredux'
// import thunk from 'redux-thunk'
import { thunk, looger } from '../myredux/middle'


function countReducer(state, action) {
  state = state || {
    count: 100
  }
  switch (action.type) {
    case 'add':
      return {
        ...state,
        count: state.count + action.num
      }
    case 'minus':
      return {
        ...state,
        count: state.count - action.num
      }
    default:
      return {
        ...state
      }
  }
}
function colorReducer(state, action) {
  state = state || {
    color: 'red'
  }
  switch (action.type) {
    case 'changeColor':
      return {
        color: action.col
      }
    default:
      return {
        ...state
      }
  }
}

let rootReducer = combineReducers({
  countState: countReducer,
  colorState: colorReducer
})
let store = createStore(rootReducer, applyMiddleware(thunk, looger))
export default store