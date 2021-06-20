// export function thunk(store) {
//   return function (dispatch) {
//     return function (action) {
//       if (typeof action === 'function') {
//         return action(dispatch, store.getState)
//       } else {
//         return dispatch(action)
//       }
//     }
//   }
// }

export const thunk = store => dispatch => action => {
  if (typeof action === 'function') {
    return action(dispatch, store.getState)
  } else {
    return dispatch(action)
  }
}

export const looger = store => dispatch => action => {
  console.log("老值是：", store.getState())
  dispatch(action)
  console.log("新值是：", store.getState())
}



// export default function applyMiddleware(...middlewares) {
//   return createStore => (...args) => {
//     const store = createStore(...args);
//     let dispatch = () => {
//       throw new Error('Dispatching while constructing your middleware is not allowed. ' +
//           'Other middleware would not be applied to this dispatch.')
//     }

//     const middlewareAPI = {
//       getState: store.getState,
//       dispatch: (...args) => dispatch(...args)
//     }
//     const chain = middlewares.map(middleware => middleware(middlewareAPI));
//     dispatch = compose(...chain)(store.dispatch);

//     return {
//       ...store,
//       dispatch
//     }
//   }
// }