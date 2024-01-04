import React, { Component } from 'react'

export class Footer extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div style={{position: 'fixed', bottom: 0, backgroundColor: 'fuchsia', height: '15vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <p>@ {this.props.name} 2024</p>
      </div>
    )
  }
}

export default Footer