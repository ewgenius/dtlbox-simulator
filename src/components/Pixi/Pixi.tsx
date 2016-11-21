import * as React from 'react'
import { Component } from 'react'
import * as PIXI from 'pixi.js'
import GameState from '../../engine/GameState'

export default class Pixi extends Component<any, any> {
  private renderer = PIXI.autoDetectRenderer(400, 200)
  private gameState = new GameState()

  constructor() {
    super()
  }

  private get container(): HTMLDivElement {
    return this.refs['container'] as HTMLDivElement
  }

  componentDidMount() {
    this.container.appendChild(this.renderer.view)
    this.gameLoop()
    this.gameState.initState()
  }

  private renderScene() {
    this.renderer.render(this.gameState)
  }

  private gameLoop() {
    requestAnimationFrame(this.gameLoop.bind(this))
    this.gameState.update()
    this.renderScene()
  }

  render() {
    return <div className='Pixi'>
      <div className='canvas-container' ref='container' />
    </div>
  }
}