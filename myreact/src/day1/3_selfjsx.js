// React.createElement   ReactDOM.render

class Element{
  constructor(type,prop,children){
    this.type = type;
    this.prop = prop || {};
    this.children = children;
  }
  fn(str){
    return str.replace(/[A-Z]/g,function(a){
      return '-' + a.toLowerCase()
    })
  }
  render(){
    // 返回真实DOM的
    let ele = document.createElement(this.type);
    Object.keys(this.prop).forEach(item=>{
      // item:  className   style:{color:'red',fontSize:'28px'}
      // ele.setAttribute(item,this.prop[item])

      switch (item) {
        case 'className':
          ele.setAttribute('class',this.prop[item])
          break;
        case 'style':
          let str = ''; // 'color:"red";font-size:28px'
          Object.keys(this.prop['style']).forEach(key=>{
            str += `${this.fn(key)}:${this.prop['style'][key]};`
          })
          ele.setAttribute('style',str)
          break;
        default:
          ele.setAttribute(item,this.prop[item])
      }
    })
    
    this.children.forEach(item=>{
      // item 要不就是字符串  要不就是 Element的一个实例
      //若是 字符串 则添加一个文本节点； 若是实例 则添加一个 实例render之后的结果
      typeof item == 'string' ? 
      ele.appendChild(document.createTextNode(item)) : 
      ele.appendChild(item.render())
    })

    return ele;
  }
}

let React = {
  createElement(type,prop,...children){
    return new Element(type,prop,children)
  }
}
let ReactDOM = {
  render(ele,contanier){
    contanier.appendChild(ele.render())
  }
}

let ele = React.createElement(
  'div',
  {className:'box'},
  'hello',
  React.createElement('i',{style:{color:'red',fontSize:'28px'}},'world')
)
// let ele2 = <div className='box'>
//   hello <i style={{color:'red'}}>world</i>
// </div>
ReactDOM.render(ele,document.getElementById('root'))