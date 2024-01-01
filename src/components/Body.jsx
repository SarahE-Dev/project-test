import React, { Component } from 'react'
import SquareContainer from './SquareContainer'

export class Body extends Component {
  render() {
    return (
      <div style={{display: 'flex', marginLeft: '20vw'}}>
        <img style={{position: 'fixed', top: 120, marginLeft: '33%', height: '5rem'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkBzTq492LcA64y7_rrHbsCtGJB0nDEeJGMMcBbf3wCSi47rBiMylunvtKsqoMNFmsobY&usqp=CAU" alt="" />
        <p style={{position: 'fixed', top: 200, margin: '10px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur pariatur ducimus porro maxime hic, vitae eaque cupiditate corrupti laboriosam voluptatem quod velit facere sint, alias quibusdam enim labore saepe non!</p>
        <SquareContainer/>
      </div>
    )
  }
}

export default Body