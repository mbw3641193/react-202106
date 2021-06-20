import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Input from './components2/input'
import List from './components2/list'
let str = localStorage.getItem('mytodoList');// ''   null
let local_list = str ? JSON.parse(str) : []

function App(){
  let [todo,setTodo] = useState('');
  let [list,setList] = useState(local_list);
  function change(e){
    setTodo(e.target.value)
  }
  function submit(e){
    let temp = list.concat({id:Math.random(),text:todo})
    localStorage.setItem('mytodoList',JSON.stringify(temp))
    setList(temp);
    setTodo('');
  }
  function del(item,index,e){
    let temp = list.filter((item,i)=>i!==index)
    localStorage.setItem('mytodoList',JSON.stringify(temp))
    setList(temp);
  }
  return <div className=''>
          <Input value={todo} onChange={change} onEnter={submit}/>
          <List data={list} onDel={del}/>
        </div>
}

ReactDOM.render(<App/>,document.getElementById('root'))