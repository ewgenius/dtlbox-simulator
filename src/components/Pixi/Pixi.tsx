import * as React from 'react'
import { Component } from 'react'
import * as PIXI from 'pixi.js'

export default class Pixi extends Component<any, any> {
  private renderer = PIXI.autoDetectRenderer(800, 600);
  private stage = new PIXI.Container()

  constructor() {
    super()
  }

  private get container(): HTMLDivElement {
    return this.refs['container'] as HTMLDivElement
  }

  componentDidMount() {
    this.container.appendChild(this.renderer.view)
    this.renderScene()
  }

  renderScene() {
    this.renderer.render(this.stage)
  }

  render() {
    return <div className='Pixi'>
      <div className='canvas-container' ref='container' />
    </div>
  }
}