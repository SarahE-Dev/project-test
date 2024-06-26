import React, { Component } from 'react'

export class Sidebar extends Component {
    constructor(props){
        super(props)
        this.state = {
            sidebarColor: "blue"
        }
    }
  colorHandler=(color)=>{
    this.setState({
      sidebarColor: color
      })
  }
  render() {
    return (
      <div style={{position: 'fixed', left: 0, top: '15vh', height: '70vh', backgroundColor: this.state.sidebarColor, width: '20vw'}}>
        <ul style={{height: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
            <li><a onClick={()=>{this.colorHandler('green')}}>Green</a></li>
            <li><a onClick={()=>{this.colorHandler('yellow')}}>Yellow</a></li>
            <li><a onClick={()=>{this.colorHandler('blue')}}>Blue</a></li>

        </ul>
      </div>
    )
  }
}

export default Sidebar