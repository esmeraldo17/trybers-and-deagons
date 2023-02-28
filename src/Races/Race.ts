abstract class Race {
  constructor(
    private _name: string,
    private _dexterity: number,
  ) {}

  public static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  public get name(): string {
    return this._name;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public abstract maxLifePoints: number;
}

export default Race;
