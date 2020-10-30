export class ComplementaryClientData {
  private cellphone: string;
  private adress: string;
  private birthDate: string;
  private schoolarship: string;
  private institution: string;

  /**
   * Getter $cellphone
   * @return {string}
   */
  public get $cellphone(): string {
    return this.cellphone;
  }

  /**
   * Setter $cellphone
   * @param {string} value
   */
  public set $cellphone(value: string) {
    this.cellphone = value;
  }

  /**
   * Getter $birthDate
   * @return {string}
   */
  public get $birthDate(): string {
    return this.birthDate;
  }

  /**
   * Setter $birthDate
   * @param {string} value
   */
  public set $birthDate(value: string) {
    this.birthDate = value;
  }

  /**
   * Getter $adress
   * @return {string}
   */
  public get $adress(): string {
    return this.adress;
  }

  /**
   * Setter $adress
   * @param {string} value
   */
  public set $adress(value: string) {
    this.adress = value;
  }

  /**
   * Getter $schoolarship
   * @return {string}
   */
  public get $schoolarship(): string {
    return this.schoolarship;
  }

  /**
   * Setter $schoolarship
   * @param {string} value
   */
  public set $schoolarship(value: string) {
    this.schoolarship = value;
  }

  /**
   * Getter $institution
   * @return {string}
   */
  public get $institution(): string {
    return this.institution;
  }

  /**
   * Setter $institution
   * @param {string} value
   */
  public set $institution(value: string) {
    this.institution = value;
  }
}
