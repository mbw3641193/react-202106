import React from 'react'
import qqq from 'prop-types'

function Child2(props){
  function change(){
    props.onChangeName('child2的数据')
  }
  return <div>
    <h2>child2 {props.myname}</h2>
    <button onClick={change}>改</button>
  </div>
}
Child2.propTypes = {
  myname:qqq.string
}

export default Child2