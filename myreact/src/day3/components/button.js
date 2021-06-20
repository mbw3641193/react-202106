import React from 'react';
// class Button extends React.Component {
//     render() {
//       console.log('render button')
//         let {children,onClick} = this.props;
//         return <>
//           <button onClick={onClick}>{children}</button>
//         </>;
//     }
// }

//PureComponent 纯组件； 当组件接收的参数没有发生任何改变的时候 当前组件不会再去执行render
// 类似于  静态组件的  memo函数
class Button extends React.PureComponent {
  render() {
    console.log('render button')
      let {children,onClick} = this.props;
      return <>
        <button onClick={onClick}>{children}</button>
      </>;
  }
}
export default Button