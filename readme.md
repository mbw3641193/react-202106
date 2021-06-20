脚手架  create-react-app 
npm install create-react-app -g  // 全局安装这个插件  安装node

// 全局安装这个工具了 就可以 在 命令窗口 运行  create-react-app 项目名(不能中文)

// 若不想安装
npx create-react-app  项目名


react 项目使用less

第一步 运行  npm run eject (前提是  需要把内容 提交到git的历史区)




### 创建ts项目 
create-react-app 项目名  --template typescript

yarn add redux  react-redux @types/react-redux  react-router-dom  @types/react-router-dom  redux-thunk 
antd  axios




## react-app-rewired  这个包 可以让我们在不运行 eject的前提下进行自己的配置
需要配合  
1 - "scripts": {
    "start": "react-app-rewired start"
  },
2 - config-overrides.js 在根目录下创建这个文件