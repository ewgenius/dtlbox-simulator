import './App.css'
import * as React from 'react'
import { Component } from 'react'
import Pixi from '../Pixi/Pixi'

export default class App extends Component<any, any> {
  render() {
    return <div className="App">
      <Pixi />
    </div>
  }
}
