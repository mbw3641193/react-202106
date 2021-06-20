import React from 'react';
import Button from './button'
function List(props) {
  console.log('render list')
  let { data, onDel } = props;
  return <ul className='list_box'>
    {
      data.map((item, index) => {
        // return <li key={item.id}>{item.text} <Button onClick={
        //   (e) => { onDel(item, index, e) }
        // }>删除</Button></li>
        return <li key={item.id}>{item.text}</li>
      })
    }
  </ul>;
}
export default List