## 项目脚手架说明文档

### webpack4.29.4配置文件说明
1. babel-loader  解析文件，通过babel库
2. @babel/core   babel 的核心库，用于文件转义,
3. webpack-dev-server 方便开发环境的使用
4. html-webpack-plugin webpack插件，方便生成index.html
5. clean-webpack-plugin：在每次生成dist目录前，先删除本地的dist文件
6. babel-preset-mobx: Babel预置用于mobx中常用的ES特性

##### 解决jsx 的解析问题：
	1. babel-loader
	2. @babel/core
	3. @babel/preset-env
	4. @babel/preset-react

	通过加载器启动babel加载，babel在处理jsx文件的时候 按照 @babel/preset-ereact进行解析
	按照@babel/preset-env里面配置的浏览器环境进行解析

##### 解决图片加载  其中图片包括：png、jpge？、gif、svg

##### 解决样式文件的加载，通过预处理文件 scss  或者less


#### antd UI框架导入
1. npm i antd
2. npm i babel-plugin-import  必须使用(组件按需加载)

```
//具体配置如下 .babelrc
	"plugins": [
	    ["import", { "libraryName": "antd-mobile", "style": true }]
	  ]
	或webpack里面配置
```
*** 3. 由于antd中的 内置icon都是使用 svg来做的，因此需要添加svg的loader
yarn add svg-sprite-loader ***

4. 由于antd中的样式文件是 less写的，所以需要添加  less-loader css-loader  和style-loader



### 开发核心库依赖
##### 配置核心依赖 react 、react-dom

	react  react-dom   这是react .14 版本之后将react-dom，
	分离出来了 react团队通过这个分离之后，将dom相关的api全部分离到了 react-dom中

#####  添加react-router  react的标准路由，v4版本更是更加的贴近组件的思想

##### 添加mobx，进行react状态管理，结构清晰，利于管理

