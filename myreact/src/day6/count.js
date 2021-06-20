import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'
// import { Provider, connect } from 'react-redux'

import { Provider, connect } from './react_redux'

console.log(store)



function getRandomColor() {
  let a = Math.floor(Math.random() * 255),
    b = Math.floor(Math.random() * 255),
    c = Math.floor(Math.random() * 255);
  return `rgb(${a},${b},${b})`
}
class App extends React.Component {
  // componentDidMount() {
  //   this.clear = store.subscribe(() => {
  //     this.setState({})
  //   })
  // }
  // componentWillUnmount() {
  //   this.clear()
  // }
  render() {
    // let state = store.getState();
    // console.log(state)
    let { state, dispatch } = this.props;
    return <div className=''>
      <h2 style={{ color: state.colorState.color }}>{state.countState.count}</h2>
      <button onClick={() => {
        dispatch({ type: 'add', num: 2 })
      }}>+</button>
      <button onClick={() => {
        dispatch({ type: 'minus', num: 1 })
      }}>-</button>

      <button onClick={() => {
        dispatch({ type: 'changeColor', col: getRandomColor() })
      }}>换颜色</button>

      <button onClick={() => {
        dispatch(function (dispatch) {
          setTimeout(() => {
            dispatch({ type: 'changeColor', col: getRandomColor() })
          }, 1000);
        })
      }}>换颜色2</button>
    </div>;
  }
}

let App2 = connect((state) => {
  return {
    state: state
  }
}, (dispatch) => {
  return {
    dispatch: dispatch
  }
})(App)

ReactDOM.render(<Provider store={store}>
  <App2 classdName='box' />
</Provider>, document.getElementById('root'))