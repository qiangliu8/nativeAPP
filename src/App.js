import React, { Component } from 'react';
import { Button } from 'antd-mobile'
import { List } from 'antd-mobile';
import {createStore} from 'redux'
import { timingSafeEqual } from 'crypto';


class App extends React.Component{
  render() {

    const boss = '刘强'
    return (
      <div>
        <h2>独立团，{boss}</h2>
        <Button>新兵入伍</Button>
        <Yi boss="吴云" />
      </div>
      )
  }
}
class Yi extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      soilders:['刘子','强子']
    }
  }
  render() { return (
    <div>
      <h3>营长，{this.props.boss}</h3>
      <List renderHeader={() => '士兵列表'}>
        {this.state.soilders.map(v => {
        return (
          <List.Item key={v}>{v}</List.Item>
          )
        })}
      </List>
      <ul>
      {this.state.soilders.map(v => {
          return <li key={v}>{v}</li>
        })
        }
      </ul>
    </div>
  )
  }
}
export default App;
