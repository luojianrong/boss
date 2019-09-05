/*
包 含 n个 能 操 作 mongodb
数 据 库 集 合 的 model的 模 块
1.连 接 数 据 库
1.1. 引 入 mongoose
1.2. 连 接 指 定 数 据 库 (URL只 有 数 据 库 是 变 化 的 )
1.3.获 取 连 接 对 象
1.4.绑 定 连 接 完 成 的 监 听 ( 用 来 提 示 连 接 成 功 )
2.定 义 出 对 应 特 定 集 合 的 Model并 向 外 暴 露
2.1.字 义 Schema( 描 述 文 档 结 构 )
2.2.定 义 Model( 与 集 合 对 应 ,可 以 操 作 集 合 )
2.3.向 外 暴 露 Model
*/

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/gboss',{useNewUrlParser:true,useCreateIndex: true})

const connect = mongoose.connection;

connect.on('connected',(err)=>{
  if (!err) console.log('数据库连接成功')
});

const userSchema = mongoose.Schema({
  // 用户名
  'name': {type: String, required: true},
  // 密码
  'pwd': {type: String, required: true},
  // 类型
  'type': {'type': String, required: true},
  // 头像
  'avatar': {'type': String},
  // 个人简介或者职位简介
  'desc': {'type': String},
  // 职位名
  'title': {'type': String},
  // 如果你是boss 还有两个字段
  // 公司名称
  'company': {'type': String},
  // 工资
  'money': {'type': String}
})

//定义user集合
mongoose.model('user',userSchema);

module.exports = {
  getModel(name){
    return mongoose.model(name);
  }
};
