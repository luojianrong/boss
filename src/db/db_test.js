//引入mongoose
const mongoose = require('mongoose');
//链接数据库
mongoose.connect("mongodb://localhost:27017/gboss",{useNewUrlParser:true,useCreateIndex: true})
//获取连接对象
const connect = mongoose.connection;
//绑定完成连接的监听
connect.on('connected',(err)=>{
  if (!err){
    console.log("数据库连接成功")
  }
})
//得到对应的特定集合
const userSchema = mongoose.Schema({
  username:{type:String,required:true},
  password:{type:String,required:true},
  type:{type:String,required:true}
})
//定义集合
const UserModel = mongoose.model('users',userSchema);

//添加数据
function testSave() {
  const user = {
    username:"nana",
    password: '222',
    type:"boss"
  }
  const userModel = new UserModel(user);
  //保存到数据库
  userModel.save((err,user)=>{
    console.log("save:",err,user)
  })
}

//查找一个或多个对象
function testFind() {
  //查找多个
  UserModel.find((err,users)=>{
    console.log("find",err,users)
  })

  //查找一个
  UserModel.findOne({_id:'5d6fae1a037bd331dcbc9d59'},(err,user)=>{
    console.log("findeOne",err,user)
  })
}

//更新数据,通过id查找并更新某个数据 findOneAndUpdate
function testUpdate() {
  UserModel.findOneAndUpdate({_id:"5d6fae1a037bd331dcbc9d59"},{username:"haha"},(err,user)=>{
    console.log(err,user)
  })
}


//删除数据 findOneAndDelete,remove
function testDelete() {
  UserModel.remove({_id:"5d6fae1a037bd331dcbc9d59"},(err,result)=>{
    console.log("remove",err,result);
  })
}

