import React from 'react'
import ReactDOM from 'react-dom'
// import Child1 from './child1'
import Child2 from './child2'

function App(){
  // return React.createElement('div',{className:"box"},'hello')
  return <div className='day1_box'>
    hello
  </div>
}

ReactDOM.render(<>
  <App/>
  {/* <Child1/> */}
  {/* <Child1></Child1> */}
  <Child2.App></Child2.App>
  <Child2.App2/>
</>,document.querySelector('#root'))