import React from 'react';
import qqq from 'prop-types'
class Child1 extends React.Component {
    //propTypes 是用来做类型检测的
    // static propTypes = {
    //   myname:qqq.number
    // } 
    change = ()=>{
      // this.props.myname = 666;
      this.props.onChangeName('儿子给的数据')
    }
    render() {
        console.log(this.props)
        let {myname} = this.props
        return <div className=''>
            hello child1 
            <h2>{myname}</h2>
            <button onClick={this.change}>修改name</button>
        </div>;
    }
}
Child1.propTypes = {
  myname:qqq.number
}
export default Child1