import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    state={
      todoList:[],
      todo:''
    }
    change=(e)=>{
      this.setState({
        todo:e.target.value
      })
    }
    submit=()=>{
      this.setState({
        todoList:this.state.todoList.concat(this.state.todo),
        todo:''
      })
    }
    del(n){
      // this.state.todoList.splice(n,1);
      // this.setState({
      //   todoList:this.state.todoList.filter((item,index)=>index!==n)
      // })
      this.state.todoList.splice(n,1);
      this.setState({
        // todoList:[...this.state.todoList]
        todoList:this.state.todoList
      })
    }
    render() {
        let {todo,todoList} = this.state;
        return <div className=''>
          <input type="text" value={todo} onChange={this.change}/>
          <button onClick={this.submit}>提交</button>
          <ul>
            {
              todoList.map((item,index)=>{
              return <li key={index}>{item} <button onClick={()=>{this.del(index)}}>X</button></li>
              })
            }
          </ul>
        </div>;
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))