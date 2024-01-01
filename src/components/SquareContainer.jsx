import React, { Component } from 'react'
import Square from './Square'


export class SquareContainer extends Component {
  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'space-evenly', width: '100%', paddingLeft: '25%',marginTop: '20%'}}>
        <Square name={'Square One'}/>
        <Square name={'Square Two'}/>
        <Square name={'Square Three'}/>
      </div>
    )
  }
}

export default SquareContainer