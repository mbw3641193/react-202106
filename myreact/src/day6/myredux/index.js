export function createStore(reducer, fn) {
  let state;
  let listeners = [];// 事件池
  function getState() {
    return JSON.parse(JSON.stringify(state))
  }
  function subscribe(f) {
    listeners.push(f);
    return function () {
      listeners = listeners.filter(item => item !== f)
    }
  }
  function dispatch(action) {
    state = reducer(state, action)
    listeners.forEach(item => {
      item && item()
    })
  }
  dispatch({})
  if (typeof fn === 'function') {
    return fn(createStore)(reducer)
  }
  return {
    getState,
    subscribe,
    dispatch
  }
}

export function combineReducers(obj) {
  return function rootReducer(state, action) {
    state = state || {};
    Object.keys(obj).forEach(key => {
      state[key] = obj[key](state[key], action)
    })
    return state
  }
}

// function compose(...fns) {
//   let first = fns.shift()
//   return function (...arg) {
//     return fns.reduce((prev, cur) => {
//       return cur(prev)
//     }, first(...arg))
//   }
// }

function compose(...fns) {
  let last = fns.pop()
  return function (...arg) {
    return fns.reduceRight((prev, cur) => {
      return cur(prev)
    }, last(...arg))
  }
}

export function applyMiddleware(...middlewares) {
  // console.log(middleware)
  //middleware 就是thunk中间间对应的那个函数
  return function (createStore) {
    return function (reducer) {
      let store = createStore(reducer)
      // let middle = middleware(store)
      let middles = middlewares.map(item => item(store))

      // let middleDispatch = middle(store.dispatch)
      // let middleDispatchs = middles.map(item=>item(store.dispatch))
      let middleDispatch = compose(...middles)(store.dispatch)
      return {
        ...store,
        dispatch: function (action) {
          console.log('thunk创造的dispatch')
          return middleDispatch(action)
        }
      }
    }
  }
}