import React from 'react';
import logo from './logo.png';
import './logo.less'

export default class Logo extends React.Component{
  render(){
    return (
      <div className="logoImg">
        <img src={logo} alt="logo"/>
      </div>
    )
  }
}
