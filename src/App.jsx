import React, { Component } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import './App.css'

export class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Body/>
        <Sidebar/>
        <Footer name={'Sarah Eatherly'}/>
        
      </div>
    )
  }
}

export default App
