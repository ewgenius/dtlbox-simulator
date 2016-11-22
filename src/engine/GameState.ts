import { Container } from 'pixi.js'
import Player from './objects/Player'

export default class GameState extends Container {
  player: Player
  
  constructor() {
    super()
  }

  initState() {
  }

  update() {
  }
}