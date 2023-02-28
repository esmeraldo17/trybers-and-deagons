import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  static icrement = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.icrement += 1;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  public static createdRacesInstances(): number {
    return Orc.icrement;
  }
}
  
export default Orc;