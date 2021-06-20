import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    state = {
      name:"珠峰"
    }
    fn(){
      console.log(this.state.name)
    }
    fn2 = ()=>{
      console.log(this.state.name)
    }
    render() {
        let {name} = this.state;
        return <div className=''>
          
          {/* <button onClick={函数体}>按钮</button> */}
          <button onClick={()=>{console.log(this.state.name)}}>按钮1</button>
          <button onClick={this.fn}>按钮fn</button>
          <button onClick={this.fn.bind(this)}>按钮2</button>
          <button onClick={()=>{this.fn()}}>按钮3</button>
          <button onClick={this.fn2}>按钮4</button>
        </div>;
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))