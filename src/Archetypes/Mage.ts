import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private _energyType: EnergyType;
  static increment = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.increment += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return this.increment;
  }
}

export default Mage;