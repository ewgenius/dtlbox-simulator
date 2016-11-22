import { Container, Sprite, loader } from 'pixi.js'
import Player from './objects/Player'

const DMITRUS = require('../../assets/dmitrus.png')

export default class GameState extends Container {
  player: Player

  constructor() {
    super()
  }

  dmitrus: Sprite

  initState() {
    loader
      .add(DMITRUS)
      .load(() => {
        this.dmitrus = new Sprite(loader.resources[DMITRUS].texture)
        //this.dmitrus.scale.x = 2
        //this.dmitrus.scale.y = 2
        this.addChild(this.dmitrus)
      })
  }

  update() {
    if (this.dmitrus) {
      this.dmitrus.x += 0.1
    }
  }
}