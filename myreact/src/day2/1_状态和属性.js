import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// react 组件当中 一共有两个数据源 状态state 属性props

// react要求 组件首字母必须大写
// props属性  一般都是父传子的数据
// A 组件中 使用了B组件 那么 B就是A的子组件 A就是B的父组件

function Child(props) {
  // props 就是使用这个组建的地方给组件传递的一些参数
  console.log(props)
  // var a = 123;
  var [a,changeA] = useState(123)
  return <div className={props.className}>
    Child {props.qq}
    {a}
  </div>
}
console.log(React.Component)
// setState
class Child2 extends React.Component{
  // constructor(){
  //   super()
  //   this.state = {
  //     name:'珠峰'
  //   }
  // }
  state = {
    name:'zhufeng'
  }
  render(){
    // 类组件中 我们都可以通过 this.props 获取父组件传递的数据
    console.log(this.props)
    console.log(this.state)
    return <div>
      child2
    </div>
  }
}

class App extends React.Component {
    
    render() {
        return <div className=''>
          hello
          <Child className='box' qq='box2'/>
          <Child2 className='box' qq='box2'/>
        </div>;
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))