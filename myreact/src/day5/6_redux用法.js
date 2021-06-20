import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'

console.log(store)
console.log(store.getState())
store.subscribe(() => {
  console.log(66666)
})
class App extends React.Component {
  componentDidMount() {
    this.f = store.subscribe(() => {
      this.setState({})
    })

  }
  componentDidUpdate() {
    // this.f()
  }
  componentWillUnmount() {
    this.f()
  }
  render() {
    return <div className=''>
      <h1>数字是{store.getState().count}</h1>
      <button onClick={
        () => {
          store.dispatch({ type: 'add', num123: 10 })

        }
      }>+</button>
      <button onClick={
        () => {
          store.dispatch({ type: 'minus', num123: 5 })
        }
      }>-</button>
    </div>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'))