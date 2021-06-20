import React from 'react';
import ReactDOM from 'react-dom';
import Child1 from './components/child1'
import Child2 from './components/child2'


class App extends React.Component {
    state = {
      name:"珠峰"
    }
    setName=()=>{
      this.setState({
        name:"珠峰培训"
      })
    }
    childEvent = (name)=>{
      console.log(name)
      this.setState({
        name:name
      })
    }
    render() {
        let {name} = this.state;
        return <div className=''>
            <button onClick={this.setName}>父改</button>
            <Child1 
              myname={name}
              changeName={this.childEvent}
              onChangeName={this.childEvent}
              />
              <Child2
                myname={name}
                changeName={this.childEvent}
                onChangeName={this.childEvent}
              />
        </div>;
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))