import React from 'react';
import Button from './button'
class List extends React.PureComponent {
  render() {
    console.log('render list')
      let {data,onDel}  = this.props;
      return <ul className='list_box'>
        {
          data.map((item,index)=>{
          return <li key={item.id}>{item.text}</li>
          })
        }
      </ul>;
    //   return <ul className='list_box'>
    //   {
    //     data.map((item,index)=>{
    //     return <li key={item.id}>{item.text} <Button onClick={
    //       (e)=>{onDel(item,index,e)}
    //     }>删除</Button></li>
    //     })
    //   }
    // </ul>;
  }
}
export default List

