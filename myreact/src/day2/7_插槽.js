import React from 'react';
import ReactDOM from 'react-dom';
import Child3 from './components/child3'
import Model from './components/model'
class App extends React.Component {
    state = {
      show:true
    }
    close = ()=>{
      this.setState({
        show:false
      })
    }
    ok=()=>{
      console.log('用户点击了OK')
    }
    cancel=()=>{
      console.log('用户点击了取消')
      this.close()
    }
    render() {
      let {show} = this.state;
        return <div className=''>
          <Child3>
            哈哈 珠峰
            <h2>6666</h2>
          </Child3>
          <Model
            className = 'box'
            isShow={show}
            onClose={this.close}
            onOK = {this.ok}
            onCancel = {this.cancel}
            title={
              <div><h2>gggg</h2><button>6666</button></div>
            }
          >
            <h2 type='header'>这时用户自己设置的title</h2>
            <div>用户的内容部分1</div>
            <div>用户的内容部分2</div>
            hello
            <p type='footer'>
              这时用户自己的尾部 
              <button onClick={this.close}>确定</button>
            </p>
          </Model>
        </div>;
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))