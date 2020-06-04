1、安装最先版本的node.js
node -v
npm -v

2、切换淘宝镜像源
npm install -g cnpm --registry=https://registry.npm.taobao.org

3、安装vscode

4、新建一个空文件夹，例如：koa-demo；使用vscode打开
mkdir koa-demo
cd koa-demo

5、在vscode中打开命令行终端，初始化项目，
能选择默认的点击回车即可，入口文件采用默认的index.js
npm init

6、在生成的package.json同级目录下创建index.js文件
vi index.js

内容如下：

const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);

7、安装koa框架
cnpm install koa --save

8、package.json中配置dev运行脚本
"dev": "node index.js",

9、运行项目
npm run dev

10、安装热重载（热更新）工具
cnpm install nodemon --save-dev

package.json修改dev脚本成：
"dev": "nodemon index.js"

11、安装支持es6语言的工具
cnpm install babel-cli --save
cnpm install babel-preset-es2015 --save

package.json同级目录新增 .babelrc 文件，内容如下：
{
    "presets":["es2015"]
}

package.json修改dev脚本成：
"dev": "nodemon index.js --exec babel-node"

index.js文件
const Koa = require('koa'); 改成 import Koa from 'koa'
