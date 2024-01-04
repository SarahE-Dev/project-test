import React, { Component } from 'react'


export class Square extends Component {
    constructor(props){
        super(props)
        console.log(props.name);
        this.state = {
          url1: null
        }
        
    }
  getColor=(name)=>{
    if(name === 'Square One'){
      return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKUkMrWTMgP1y9VnWOSWA0kpDELEIpMQjOgSMpVmXO9w&s'
      
    }
    if(name === 'Square Two'){
      return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGWwwqjBUGqm-2lWRaYrEZbLYjkc_KJdJYb1B5cosJjw&s'
    }
    if(name === 'Square Three'){
      return 'https://png.pngtree.com/thumb_back/fh260/background/20230720/pngtree-blue-and-purple-neon-star-3d-art-background-with-a-cool-image_3705286.jpg'
    }
  }
  render() {
    return (
      <div style={{border: '2px solid white', padding: '20px', margin: '20px', height: '8vw', width: '10vw', backgroundImage: `url("${this.getColor(this.props.name)}")`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', textShadow: '2px 1px 1px blueviolet', fontSize: '2rem'}}>{this.props.name}</div>
    )
  }
}

export default Square