import React from 'react'
// react组件都是函数
function App(){
  // 静态组件
  return <div>
    APP
  </div>
}

class App2 extends React.Component{
  render(){
    return <div>
      APP2
    </div>
  }
}

export default {
  App,
  App2
}