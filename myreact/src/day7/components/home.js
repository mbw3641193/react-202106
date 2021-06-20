import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import MyA from './child/a'
import MyB from './child/b'
function Home(props) {
  console.log(props)
  function toA() {
    setTimeout(() => {
      props.history.push('/home/a')
      // push 会新增历史
      // replace 不会新增历史
    }, 1000);
  }
  function toB() {
    setTimeout(() => {
      props.history.push('/home/b')
    }, 100);
  }
  return <>
    <h1>HOME</h1>
    <div>
      {/* <NavLink to='/home/a'>A</NavLink>
      <NavLink to='/home/b'>B</NavLink> */}
      <button onClick={toA}>A</button>
      <button onClick={toB}>B</button>

      <Route path='/home/a' component={MyA}></Route>
      <Route path='/home/b' component={MyB}></Route>

    </div>
  </>
}

export default Home