import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
//useState 可以然给我们的函数式组件 拥有自己的状态
// 每一次的渲染都是一个独立的闭包
function App(props) {
  // var count = 100;
  var [count, setCount] = useState(1000);
  var [name, changeName] = useState('珠峰');
  let objRef = useRef()
  console.log(objRef)
  console.log(useState(1000))
  function add() {
    // count++
    setCount(++count)
    objRef.current = count
    changeName('珠峰培训')
    // name = '珠峰培训'
    console.log(count)
  }
  // console.log('render')
  const logAsync = () => {
    console.log(count)
    setTimeout(() => {
      console.log(objRef.current)
    }, 2000);
  }
  return <div>
    <h2>{count}</h2>
    <h1>{name}</h1>
    <button onClick={add}>+</button>
    <button onClick={logAsync}>异步</button>
  </div>
}

function Counter() {
  // 更新函数 可以接收一个回调函数作为参数；执行时会把最新的值传递给回调函数
  let [count, setCount] = useState(100);
  let [name, setName] = useState('zhufeng');
  function add() {
    setCount(++count)
    setName('珠峰培训')
  }
  function minus() {
    setTimeout(() => {
      // setCount(--count)
      setCount(function (num) {
        console.log(arguments)
        return --num
      })
      setName((name) => name + 666)
    }, 3000);
  }
  return <div>
    <h2>{count}{name}</h2>
    <button onClick={add}>+</button>
    <button onClick={minus}>-</button>
  </div>
}

function Counter2() {
  let [state, setState] = useState({
    name: "珠峰",
    count: 100
  })
  function add() {
    // 更新函数执行的之后 是用参数把老状态直接顶替 不是合并
    setState({
      ...state,
      count: ++state.count
    })
  }
  function change() {
    setState({
      ...state,
      name: "珠峰培训"
    })
  }
  return <div>
    <h2>{state.name} {state.count}</h2>
    <button onClick={add}>count+</button>
    <button onClick={change}>changeName</button>
  </div>
}

function Counter3() {
  // 初始化数据的是时候只会执行一次
  let [count, setCount] = useState(() => {
    console.log('useState')
    return 100
  })
  function add() {
    setCount(++count)
  }
  return <div>
    <h2>{count}</h2>
    <button onClick={add}>+</button>
  </div>
}

// function Counter4() {
//   // react hook 只能写在最外层作用域上
//   let count,setCount;
//   if(true){
//     [count, setCount] = useState(100)
//   }else{
//     [count, setCount] = useState(1000)
//   }
  
//   function add() {
//     setCount(++count)
//   }
//   return <div>
//     <h2>{count}</h2>
//     <button onClick={add}>+</button>
//   </div>
// }

ReactDOM.render(<Counter3 />, document.getElementById('root'))