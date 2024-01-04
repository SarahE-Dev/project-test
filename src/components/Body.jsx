import React, { Component } from 'react'
import SquareContainer from './SquareContainer'

export class Body extends Component {
  render() {
    return (
      <div style={{display: 'flex', marginLeft: '20vw', width: '80vw', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <img style={{width: '17%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkBzTq492LcA64y7_rrHbsCtGJB0nDEeJGMMcBbf3wCSi47rBiMylunvtKsqoMNFmsobY&usqp=CAU" alt="" />
        <p style={{width: '60vw'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur pariatur ducimus porro maxime hic, vitae eaque cupiditate corrupti laboriosam voluptatem quod velit facere sint, alias quibusdam enim labore saepe non!</p>
        <SquareContainer/>
        
        
      </div>
    )
  }
}

export default Body