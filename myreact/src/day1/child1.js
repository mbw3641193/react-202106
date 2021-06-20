import React from 'react';

// class A extends React.Component{

// }

//结构中的变量 需要使用 {变量或者表达式}
// 行内样式 style必须写成  style={对象}
// 普通对象不能作为 react的结构
// 在react中我们可以使用 map来展示列表结构
//dangerouslySetInnerHTML={{__html:html}}; 本质上应用的就是 innerHTML
// for  htmlFor
// class  className
// let str = "你好珠峰";
function fn(str) {
  return 'hello ' + str
}
let list = [{ name: "小红", age: 10 }, { name: "小红2", age: 120 }, { name: "小红3", age: 140 }, { name: "小红4", age: 105 }]
let html = '<i>hello world</i>'
let a = <i>hello world</i>
function Child1() {
  let str = '虽然他还是网上商人和书法国画得分回复'
  let obj = { color: 'red' }
  let ary = [1, 2, 300, 400, <i key="1">500</i>];

  function getList(ary) {
    let temp = [];
    for (let i = 0; i < ary.length; i++) {
      temp.push(<li key={i}>姓名是{ary[i].name}_年龄是{ary[i].age}</li>)
    }
    return temp
  }

  return <div className={str} style={obj}>
    {str.length > 10 ? '挺长' : " 不够10"}str
    {fn(str)}
    <h2 style={{ color: 'blue' }}>{str}</h2>
    <p>{JSON.stringify(obj)}</p>
    <h3>{ary}</h3>
    <ul className='box'>
      {
        list.map(function (item, index) {
          return <li key={index}>姓名是{item.name}_年龄是{item.age}</li>
        })
      }
    </ul>
    <ul>
      {
        getList(list)
      }
    </ul>
    {html}
    {a}
    <div dangerouslySetInnerHTML={{__html:html}}></div>
    <input type="checkbox" id="qqq"/><label htmlFor="qqq">苹果</label>
  </div>
}
export default Child1