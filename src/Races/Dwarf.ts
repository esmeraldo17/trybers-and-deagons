import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  static icrement = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.icrement += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Dwarf.icrement;
  }
}

export default Dwarf;