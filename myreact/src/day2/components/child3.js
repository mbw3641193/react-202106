import React from 'react';
class Child3 extends React.Component {
  // children 
  // string   array   object  undefined
    render() {
        console.log(this.props)
        return <div className=''>
            {this.props.children}
        </div>;
    }
}
export default Child3