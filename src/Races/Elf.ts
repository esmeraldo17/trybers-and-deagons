import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  static icrement = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.icrement += 1;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  public static createdRacesInstances(): number {
    return Elf.icrement;
  }
}
  
export default Elf;