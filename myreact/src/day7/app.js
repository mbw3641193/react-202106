import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './app.css'
import { HashRouter, Link, NavLink, BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
// import Home2 from './components/home'
import User from './components/user'
import QQ from './components/qq'
import NoFound from './components/404'
import Login from './components/login'

// import('./components/user').then(data => {
//   console.log('qqqq', data)
// })

const Loading = () => <h2>正在加载。。。</h2>


// let Home = () => import(/*webpackChunkName:"Home"*/'./components/home')

function loadable(obj) {
  let { loader, loading: Load } = obj;
  // flag 是用来判断组件是否加载完成
  return function (props) {
    let Com = null;
    let [flag, setFlag] = useState(false)
    loader().then(data => {
      // data {default}
      Com = data.default;
      setFlag(true)
    })
    return <>
      {
        flag ?
          <Com {...props} />
          :
          <Load />
      }
    </>
  }
}
// function Loadable(obj) {
//   let { loader, loading: Load } = obj;
//   // flag 是用来判断组件是否加载完成
//   return class Temp extends React.Component {
//     state = {
//       flag: false,
//       Com: null
//     }
//     componentDidMount() {
//       loader().then(data => {
//         // data {default}
//         console.log(data)
//         this.setState({
//           Com: data.default,
//           flag: true
//         })
//       })
//     }
//     render() {
//       let { flag, Com } = this.state;
//       return <>
//         {
//           flag ?
//             <Com {...this.props} />
//             :
//             <Load />
//         }
//       </>
//     }
//   }
// }



let Home = loadable({
  loader: () => import(/*webpackChunkName:"Home"*/'./components/home'),
  loading: Loading
})

/* 
  Route 相当于 VueRouter的routerView
  Redirect  重定向  path 匹配了那个路径  to 就是重定向到哪个组件
  HashRouter 走的是hash模式
  BrowserRouter  走的是history模式
  Link 就是会渲染成可点击跳转的标签 to 就是跳到哪里
  Switch 包起来的 Route 只要有一个匹配上了 下边的就不再匹配了
*/


function GetQuery(Com, props) {
  let obj = {};
  props.location.search.replace(/([^?=&]+)=([^?=&]+)/g, function (a, b, c) {
    console.log(b, c)
    obj[b] = c
    return ''
  })
  return <Com query={obj} {...props} />
}
let isLogin = true;
let userLevel = 5;
const Protect = (params) => {
  // params {path   component}
  // let { path, component: Com } = params;
  // return <Route path={path} render={(props) => {
  //   //props 是router传递的 {history location match ...}
  //   if (isLogin) {
  //     return <Com {...props} />
  //   }
  //   return <Redirect to='/login'></Redirect>
  // }}></Route>
  useEffect(() => {
    return () => {
      alert("离开")
    }
  }, [])
  if (isLogin) {
    let { level } = params;
    if (userLevel >= level) {
      return <Route {...params}></Route>
    }
    return <Redirect to='/404'></Redirect>
  } else {
    return <Redirect to='/login'></Redirect>
  }
}
class App extends React.Component {
  constructor() {
    super();

  }
  render() {
    return <div className=''>
      <h1>hello</h1>
      {/* <Link to='/home'>首页</Link>
      <Link to='/user'>用户</Link> */}

      <NavLink to='/home/666'>首页</NavLink>
      <NavLink to='/qq?a=123&b=234'>qq</NavLink>
      <NavLink to='/user'>用户</NavLink>
      <Switch>
        <Redirect path='/' exact to='/home'></Redirect>
        {/* <Route path='/' exact render={() => <h2>world</h2>}></Route> */}
        {/* <Route path='/qq' render={(props) => <QQ {...props} />}></Route> */}
        <Route path='/qq' render={(props) => GetQuery(QQ, props)}></Route>
        {/* <div> */}
        <Route path='/home/:aaa' component={Home}></Route>
        {/* </div> */}

        {/* <h2> */}
        {/* <Route path='/user' component={User}></Route> */}
        <Protect path='/user' component={User} level={4}></Protect>
        {/* <Route path='/user' render={(props) => GetQuery(User, props)}></Route> */}
        {/* </h2> */}
        <Route path='/login' component={Login}></Route>
        <Route path='/*' render={() => <NoFound />}></Route>
      </Switch>
    </div>;
  }
}

ReactDOM.render(<HashRouter>
  <App />
</HashRouter>, document.getElementById('root'))