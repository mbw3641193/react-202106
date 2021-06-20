import React from 'react';

function Input(props) {

  let { type = 'text', value, onChange,onEnter } = props;
  function keydown(e) {
    if(e.keyCode == 13){
      onEnter(e)
    }
  }
  return <div className=''>
    自己的input
    <input type={type} value={value} onChange={onChange} onKeyDown={keydown} />
  </div>;
}
export default Input