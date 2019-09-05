/*
1、引入express
2、生成应用对象，执行express函数
3、注册跟路由（app.use）
4、启动服务器
*/

const express = require('express');
const bodyParser = require('body-parser') // 解析请求体
const cookieParser = require('cookie-parser') // 解析cookie

const appRouter = require('./appRouter');

const app = express();

//使用中间件
app.use(bodyParser.json()); //解析请求体数据（ajax请求，json数据格式)
app.use(bodyParser.urlencoded({extended:false})); //解析请求体（表单数据）
app.use(cookieParser()); //解析cookie

app.use('/api',appRouter);


app.listen('8080',(err)=>{
  if (!err){
    console.log('服务器启动成功33')
  }
})




