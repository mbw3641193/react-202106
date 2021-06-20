import React from 'react';
// type
// value
// onChange
// onEnter
class Input extends React.Component {
    keydown=(e)=>{
      // console.log(e)
      if(e.keyCode == 13){
        this.props.onEnter(e)
      }
    }
    render() {
        let {type='text',value,onChange} = this.props;
        return <div className=''>
          自己的input
          <input type={type} value={value} onChange={onChange} onKeyDown={this.keydown}/>
        </div>;
    }
}
export default Input