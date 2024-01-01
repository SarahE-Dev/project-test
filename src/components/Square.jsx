import React, { Component } from 'react'

export class Square extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div style={{border: '2px solid white', padding: '20px', margin: '20px', height: '70px', width: '57px'}}>{this.props.name}</div>
    )
  }
}

export default Square