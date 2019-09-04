import React from 'react';
import {WingBlank,WhiteSpace,InputItem,Button,List,NavBar} from 'antd-mobile';
import Logo from '../../components/logo/logo'

export default class Login extends React.Component{
  render(){
    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo/>
        <WingBlank>
          <List>
            <InputItem>用户名:</InputItem>
            <WhiteSpace/>
            <InputItem type="password">密码:</InputItem>
            <WhiteSpace/>
            <Button type="primary">登录</Button>
            <Button>还没有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}
