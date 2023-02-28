import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  static increment = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.increment += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return this.increment;
  }
}

export default Warrior;