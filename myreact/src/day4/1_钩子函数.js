import React from 'react';
import ReactDOM from 'react-dom';


let flag = false;
class Child extends React.Component {
  // constructor() { // 比beforeCreate 晚 
  //   super();
  //   // 第一个钩子函数
  //   this.state = {}
  //   this.fn = this.fn.bind(this)
  // }
  fn() { }
  fn = () => { }
  state = {
    name: "珠峰"
  }
  // static getDerivedStateFromProps(props, state) {
  //   console.log('getDerivedStateFromProps')
  //   if (!flag) {
  //     return {
  //       age: 100,
  //       ...props
  //     }
  //   } else {
  //     return {
  //       age: 100
  //     }
  //   }

  // }
  // componentWillMount() {   // beforeMount
  //   console.log('挂在完成之前')
  // }
  // UNSAFE_componentWillMount() {
  //   console.log('挂在完成之前')
  // }
  // componentDidMount() { //mounted
  //   // react当中的AJAX请求 一般都是在这个钩子进行的
  //   //很常用的一个钩子函数
  //   // 组件加载完成之后执行
  //   console.log('挂在完成之hou')
  // }
  // --------------- 以上是挂在阶段

  // shouldComponentUpdate(nextProps, nextState) {
  //   // 只要组件想要重新的渲染的时候， 就会执行这个函数
  //   // 若这个函数返回一个false 则render就不再执行了；返回true render才会执行
  //   // 
  //   // 用来优化的一个钩子函数
  //   return false
  // }
  componentDidUpdate() { // updated
    //更新渲染完成之后会触发这个钩子函数
    console.log('update')
    // this.setState({
    //   name: Math.random()
    // })
  }

  componentWillUnmount() { // beforeDestroy
    // 组件销毁之前   
    // 直观理解 就是 在html结构中 找不到组件的html的结构了
    //一般用来移除绑定的原生事件 或者清除一些定时器
  }


  render() {
    console.log('render')
    let { count } = this.props
    return <div className=''>
      <h2>state:{this.state.count},{this.state.name}</h2>
      <h2>props:{count}</h2>
      <button onClick={
        () => {
          // count--;
          // this.props.count--;
          flag = true;
          this.setState({
            count: --this.state.count
          })
        }
      }>-</button>
    </div>;
  }
}


class Child2 extends React.Component {
  //PureComponent 只会进行一个浅层比较
  state = {
    count: 10
  }
  render() {
    console.log('render')

    return (<>
      <button onClick={() => {
        console.log(666)
        setTimeout(() => {
          // console.log(www)
        }, 2000);
      }}>+</button>
      <h2>{this.state.count}</h2>
    </>)
  }
}

class App extends React.Component {
  state = {
    count: 100,
    obj: {
      count: 200,

    },
    error: false,
    errorInfo: ''
  }
  componentDidCatch(error, info) {
    console.log(error, info)
    this.setState({
      error: true,
      errorInfo: error
    })
  }
  render() {
    console.log('renderApp', this.state.error)
    return <>
      {/* <button onClick={() => {
        this.setState({
          count: this.state.count + 1,
          obj: Object.assign(this.state.obj, { count: this.state.count + 1 })
          // obj: {
          //   ...this.state.obj,
          //   count: this.state.count + 1
          // }
        })
      }}>+</button>
      <h2>{this.state.count}</h2>
      <h2>{this.state.obj.count}</h2> */}
      {/* <Child count={this.state.count}></Child> */}
      {
        !this.state.error ? <Child2 obj={this.state.obj} /> : this.state.errorInfo
      }
      {/* <Child2 obj={this.state.obj} /> */}
    </>
  }
}

ReactDOM.render(<React.StrictMode>
  <App />
</React.StrictMode>, document.getElementById('root'))