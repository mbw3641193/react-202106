import React, { memo, useCallback, useMemo, useState } from 'react';
import ReactDOM from 'react-dom'
function Child({ name }) {
  console.log('render')
  return <h1>{name}</h1>
}
Child = memo(Child)
// memo 处理过的组件 若传给组件的数据没有发生改变  那么  组件就不会重新执行
// let data =  useMemo(()=>{return 数据},[依赖]) ; 只有依赖法神改变的时候  data才会被给成新的地址
// useMemo 一般用来缓存数据使用

// let minus = useCallback(函数体,[依赖])； 只有依赖发生改变的时候  minus才会被赋予一个新的函数地址

// useCallback 和 useMemo 的时候 都需要结合 mem偶函数进行优化


function Child2({ data,onMinus }) {
  console.log('render2')
  return <>
    <h1>{data.name} --- {data.age}</h1>
    <button onClick={onMinus}>-</button>
  </>
}
Child2 = memo(Child2)
function App() {
  let [count, setCount] = useState(100);
  let [name, setName] = useState("珠峰");
  let [obj,setObj] = useState({q:123,w:234})
  
  let add = ()=>{setCount(++count);setObj({...obj,q:200})};
  let change = (e)=>{setName(e.target.value)}
  // console.log('renderApp')
  // let data = {
  //   age:1000,name
  // }
  let data = useMemo(()=>{
    return {
      age:1000,
      name:name
    }
  },[name]) // [依赖]
  let minus = ()=>{
    setCount(--count)
  }
  // let minus = useCallback(()=>{
  //   setCount(--count)
  // },[name])

  return <>
    <button onClick={add}>+</button>
    <input type="text" value={name} onChange={change}/>
    <h2>{count}</h2>
    <Child name={name} />
    <Child2 data={data} onMinus={minus}/>
  </>
}
ReactDOM.render(<App/>,document.getElementById('root'))