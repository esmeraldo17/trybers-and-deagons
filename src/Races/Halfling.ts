import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  static icrement: number;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.icrement += 1;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  public static createdRacesInstances(): number {
    return this.icrement;
  }
}
  
export default Halfling;