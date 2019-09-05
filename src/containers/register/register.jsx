import React from 'react';
import './register.less';
import {NavBar,WingBlank,List,InputItem,WhiteSpace,Radio,Button} from 'antd-mobile';
import Logo from '../../components/logo/logo';

import {reqRegister} from '../../api'

const {RadioItem} = Radio;
/*NavBar:导航栏  WingBlank，WhiteSpace:两边留白  Radio:单选按钮*/
export default class Register extends React.Component{

  //初始化状态数据
  state={
    username:'',
    password:'',
    rePassword:"",
    type:'boss'
  }

  //点击已有账户跳转到登录页面
  goLogin=()=>{
    this.props.history.push('/login');
  }

  //监听输入框数据变化，更新状态
  handleChange = (name,val)=>{
    this.setState({
      [name]:val
    })
  }

  //选择类型更新状态
  handleClick = (type,val)=>{
    this.setState({
      type:val
    })
  }

  //点击注册，发送请求
  toRegister = ()=>{
    const {name,pwd,type} = this.state;
    console.log(name,pwd,type)
    //发送请求
    reqRegister({name,pwd,type})
      .then((data)=>{
        console.log(data)
      })
      .catch((err)=>{
        if (err) console.log('注册失败')
      })
  }
  render(){
    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo/>
        <WingBlank>
          <List>
            <InputItem onChange={(val)=>{this.handleChange("name",val)}}>用户名：</InputItem>
            <WhiteSpace/>
            <InputItem type="password" onChange={(val)=>{this.handleChange("pwd",val)}}>密码：</InputItem>
            <WhiteSpace/>
            <InputItem type="password" onChange={(val)=>{this.handleChange("rePassword",val)}}>确认密码：</InputItem>
            <WhiteSpace/>
            <RadioItem checked={this.state.type === 'genius'}
                       onClick={()=>{this.handleClick('type','genius')}}>牛人</RadioItem>
            <RadioItem checked={this.state.type === 'boss'}
                       onClick={()=>{this.handleClick('type','boss')}}>Boss</RadioItem>
            <Button type="primary" onClick={this.toRegister}>注册</Button>
            <Button onClick={this.goLogin}>已有账户</Button>
          </List>
        </WingBlank>

      </div>
    )
  }
}
