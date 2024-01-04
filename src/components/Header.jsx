import React, { Component } from 'react'


export class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      myName: 'Sarah Eatherly'
    }
  }
  render() {
    return (
      <div style={{backgroundColor: 'red', width: '100vw', height: '15vh', position: 'fixed', top: 0, fontSize: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{this.state.myName}</div>
    )
  }
}

export default Header