import React from 'react';
import ReactDOM from 'react-dom';
// react中 数据更改 想要触发视图更新 需要使用setState这个方法
// setState 大部分情况下是一个异步更新数据的方法  在原生事件绑定当中是一个同步的
class App extends React.Component {
    state = {
      count:100,
      name:'珠峰'
    }
    add(){
      // this.state.count++
      // console.log(this.state.count)
      // this.setState({
      //   // 把这个对象合并到了老的state当中
      //   count:this.state.count+1
      // })
      // this.setState({})

      this.setState({
        // 把这个对象合并到了老的state当中
        count:this.state.count+1
      })
      this.setState({
        // 把这个对象合并到了老的state当中
        name:'珠峰培训'
      },function(){
        // 当前数据更新之后会触发这个函数
        console.log(this.state.name)
      })
      console.log(this.state.name)
    }
    minus(){
      this.state.count--
    }
    render() {
      // 视图想要更新 则必须然render执行
      console.log('render')
      let {count,name} = this.state;
        return <div className=''>
          <h1>{name}{count}</h1>
          <button onClick={()=>{this.add()}}>+</button>
          <button onClick={()=>{this.minus()}}>-</button>
        </div>;
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))