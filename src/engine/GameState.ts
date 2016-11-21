import { Container, Graphics } from 'pixi.js'

export default class GameState extends Container {
  constructor() {
    super()

    console.log(this)
  }

  initState() {
    let line = new Graphics()
    line.lineStyle(4, 0xFFFFFF, 1)
    line.moveTo(0, 0)
    line.lineTo(80, 50)
    line.x = 32
    line.y = 32
    this.addChild(line)
  }

  update() {
    if (this.children[0])
      this.children[0].x += 1
  }
}