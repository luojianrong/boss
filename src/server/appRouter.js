/*
后台应用的路由器模块
1. 引入express
2. 得到路由器
3. 注册n个路由
4. 向外暴露路由器
5. 通过 app使用上路由器
 */

const express = require("express");
const router = express.Router();
const Model = require('./models');

//注册路由
router.post('/register',(req,res)=>{
  //获取请求体参数
  const {name,pwd,type} = req.body;
  //数据库查找用户是否存在
  Model.findOne(name,(err,user)=>{
    if (user){
      //存在则返回错误提醒
      res.send({code:1,msg:'用户名已经存在'})
    } else{
      //不存在，将用户信息保存到数据库中
      new Model.getModel({name,pwd,type}).save((err,user)=>{
        //返回响应
        res.send({code:0,data:{id:user._id,name,type}});
      });
    }
  })
});

//登录路由
router.post('/login',(req,res)=>{
  //1、获取请求体参数
  const {name,pwd} = req.body;
  //2、处理数据，查询用户是否存在
  Model.findOne({name,pwd},(err,user)=>{
    //如果没有，返回错误信息
    if (!user){
      res.send({code:1,msg:"用户名或密码错误"})
    }else{
      //如果有，返回响应数据
      res.send({code:0,data: user})
    }
  })
})

module.exports = router;
