
import React from 'react';
import { MyContext } from './context'
export class Provider extends React.Component {
  // 提供一个上下文
  render() {
    let { store, children } = this.props
    return <MyContext.Provider value={{ store: store }}>
      {children}
    </MyContext.Provider>
  }
}
export const connect = function (mapStateToProps, mapDispatchToProps) {
  return function (Com) {
    // Com  就是 App
    class Temp extends React.Component {
      static contextType = MyContext;
      // constructor(props, context) {
      //   super(props, context)
      //   this.state = mapStateToProps(context.store.getState())
      // }
      componentDidMount() {
        this.clear = this.context.store.subscribe(() => {
          console.log(6666)
          // this.setState(mapStateToProps(this.context.store.getState()))
          this.setState({})
        })
      }
      componentWillUnmount() {
        this.clear()
      }
      render() {
        console.log('render')
        return <Com
          {...mapStateToProps(this.context.store.getState())}
          {...this.props}
          {...mapDispatchToProps(this.context.store.dispatch)} />
      }
    }
    return Temp
    // App2 就是 Temp 
  }
}



