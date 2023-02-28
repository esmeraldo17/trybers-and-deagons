import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  static increment = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.increment += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return this.increment;
  }
}

export default Necromancer;