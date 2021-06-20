import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    state = {
      name:"珠峰"
    }
    fn(e){
      // 若是bind处理的函数 则事件对象永远在最后一项
      console.log(arguments)
      console.log(this.state.name)
    }
    fn2(e,n){
      console.log(e,n)
    }
    fn3 = (e)=>{
      console.log(e)
    }
    render() {
        let {name} = this.state;
        return <div className=''>
          
          {/* <button onClick={函数体}>按钮</button> */}
          <button onClick={this.fn.bind(this,2,3,4,5,6)}>按钮1</button>
          <button onClick={(e)=>{this.fn2(e,2)}}>按钮2</button>
          {/* 若想要传递某些参数 则只能使用上边的这两种方式 */}

          <button onClick={this.fn3}>按钮3</button>
        </div>;
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))