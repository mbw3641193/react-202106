import React from 'react';
import ReactDOM from 'react-dom';

import Input from './components/input'
import List from './components/list'

import Button from './components/button'

let str = localStorage.getItem('mytodoList');// ''   null
let list = str ? JSON.parse(str) : []
class App extends React.Component {
    state = {
      todo:'',
      list:list
    }
    change=(e)=>{
      this.setState({
        todo:e.target.value
      })
    }
    submit=(e)=>{
      this.setState({
        list:this.state.list.concat({
          id:Math.random(),
          text:this.state.todo
        }),
        todo:''
      },function(){
        localStorage.setItem('mytodoList',JSON.stringify(this.state.list))
      })
    }
    del=(item,index,e)=>{
      // console.log(item,index,e)
      this.state.list.splice(index,1);
      localStorage.setItem('mytodoList',JSON.stringify(this.state.list))
      this.setState({})
    }
    render() {
        let {todo,list} = this.state;
        return <div className=''>
          <Button>hello</Button>
          <Input value={todo} onChange={this.change} onEnter={this.submit}/>
          <List data={list} onDel={this.del}/>
        </div>;
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))