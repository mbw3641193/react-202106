import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    state = {
      name:"珠峰"
    }
    changeName=(e)=>{
      console.log(e)
      this.setState({
        name:e.target.value
      })
    }
    changeName2=(e)=>{
      console.log(e.target.value)
    }
    fn=()=>{
      console.log('inp1:',this.state.name)
      console.log('inp2:',this.inp.value)
    }
    componentDidMount(){
      // 组件渲染完成之后 react会主动触发这个函数
      this.inp.value = '666'
    }
    render() {
        let {name} = this.state;
        return <div className=''>
          <h1>{name}</h1>
          <input type="text" value={name} onChange={this.changeName}/>
          <input ref={el=>this.inp=el} type="text" onChange={this.changeName2}/>
          <button onClick={this.fn}>获取</button>
        </div>;
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))