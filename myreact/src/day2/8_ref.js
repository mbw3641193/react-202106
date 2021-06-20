import React,{Component,createRef,useRef} from 'react';
import ReactDOM from 'react-dom';

// ref = 'xxx'   this.refs.xxx
// ref = {el=>this.xxx=el}   this.xxx
// this.xxx = createRef()   ref ={this.xxx}     this.xxx.current
// 静态组件 不能通过 ref获取对应的组件

class Child extends Component{
  render(){
    return <h2>Child</h2>
  }
} 

class App extends React.Component {
    
    fn=()=>{
      // console.log(this.refs)
      // console.log(this.box)
      // console.log(this.box2)
      console.log(this.qqq)
      console.log(this.www)
    }
    qqq  = createRef();
    www  = createRef();
    render() {
        return <div className=''>
          {/* <div ref='box'>hehehe </div>
          <Child ref='box2'/> */}
          {/* <div ref={el=>this.box = el}>hehehe </div>
          <Child ref={el=>this.box2 = el}/> */}

          <div ref={this.qqq}>hehehe </div>
          <Child ref={this.www}/>
          <button onClick={this.fn}>获取</button>
        </div>;
    }
}


function App2(){
  let h2 = createRef();
  let o;
  let h1 = useRef();
  let fn = function(){
    console.log(h2)
    console.log(o)
    console.log(h1)
  }
  return <div>
    <h2 ref={h2}>APP2</h2>
    <h2 ref={(el)=>{o = el}}>APP2</h2>
    <h1 ref={h1}>dfgdfg</h1>
    <button onClick={fn}>按钮</button>
  </div>
}

ReactDOM.render(<App2/>,document.getElementById('root'))