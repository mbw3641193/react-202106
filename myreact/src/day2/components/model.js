import React from 'react';
import './model.less'
class App extends React.Component {
  render() {
    let { isShow,
      onClose,
      onOK,
      onCancel,
      children,
      title,
      className } = this.props;

    let header = [], main = [], footer = [];
    // children 
    // string   array   object  undefined
    if (!children) {
      header.push(<header key='header'>
        标题  <button onClick={onClose}>X</button>
      </header>);
      main.push(<main key='main'>
        默认的身体
      </main>);
      footer.push(<footer key='footer'>
        <button onClick={onCancel}>取消</button>
        <button onClick={onOK}>确定</button>
      </footer>)
    } else if (typeof children === 'string') {
      header.push(<header key='header'>
        标题  <button onClick={onClose}>X</button>
      </header>);
      main.push(children);
      footer.push(<footer key='footer'>
        <button onClick={onCancel}>取消</button>
        <button onClick={onOK}>确定</button>
      </footer>)
    } else if (Array.isArray(children)) {
      children.forEach(item => {
        if (item.props && item.props.type === 'header') {
          header.push(item)
        } else if (item.props && item.props.type === 'footer') {
          footer.push(item)
        } else {
          main.push(item)
        }
      })
    } else {
      if (children.props.type === 'header') {
        header.push(children);
        main.push(<main key='main'>
          默认的身体
        </main>);
        footer.push(<footer key='footer'>
          <button onClick={onCancel}>取消</button>
          <button onClick={onOK}>确定</button>
        </footer>)
      }else if (children.props.type === 'footer'){
        footer.push(children);
        header.push(<header key='header'>
          标题  <button onClick={onClose}>X</button>
        </header>);
        main.push(<main key='main'>
          默认的身体
        </main>);
      }else{
        header.push(<header key='header'>
          标题  <button onClick={onClose}>X</button>
        </header>);
        main.push(children);
        footer.push(<footer key='footer'>
          <button onClick={onCancel}>取消</button>
          <button onClick={onOK}>确定</button>
        </footer>)
      }
    }

    if(header.length === 0){
      header.push(<header key='header'>
        标题  <button onClick={onClose}>X</button>
      </header>);
    }
    if(footer.length === 0 ){
      footer.push(<footer key='footer'>
        <button onClick={onCancel}>取消</button>
        <button onClick={onOK}>确定</button>
      </footer>)
    }
    if(main.length === 0){
      main.push(<main key='main'>
        默认的身体
      </main>);
    }

    return <>
      {
        isShow ?
          <div className={'model_box ' + (className || '')}>
            <div className="mask"></div>
            <div className="content">
              {title ? title : <h2>默认title</h2>}
              {/* {header} */}
              {main}
              {footer}
            </div>
          </div> :
          <></>
      }
    </>;
  }
}
export default App