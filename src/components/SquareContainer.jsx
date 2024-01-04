import React, { Component } from 'react'
import Square from './Square'




export class SquareContainer extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80vw', textAlign: 'center', position: 'relative', left: 0}}>
        <Square name={'Square One'}/>
        <Square name={'Square Two'}/>
        <Square name={'Square Three'}/>
      </div>
    )
  }
}

export default SquareContainer