import { Characteristic } from '../types/Characteristic'

export default class Player {
  private _productivity: Characteristic = 10
  private _morality: Characteristic = 10

  get productivity(): Characteristic {
    return this._productivity
  }

  get morality(): Characteristic {
    return this._morality
  }

  get name(): string {
    return this._name
  }

  constructor(private _name: string) {

  }
}