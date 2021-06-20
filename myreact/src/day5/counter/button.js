import React from 'react';
import { connect } from 'react-redux'
class Button extends React.Component {
  render() {
    console.log(this)
    return <div>
      <button className='' onClick={() => {
        this.props.add(20)
      }}>{this.props.n}++</button>

      <button className='' onClick={() => {
        this.props.minus(5)
      }}>{this.props.n}--</button>
    </div>;
  }
}
Button = connect((state => {
  return {
    n: state.count
  }
}), (dispatch) => {
  return {
    add(n) {
      dispatch({ type: 'add', num123: n })
    },
    minus(n) {
      dispatch({ type: 'minus', num123: n })
    }
  }
})(Button)
export default Button