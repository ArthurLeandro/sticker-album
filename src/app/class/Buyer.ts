import { I_Buyer } from "../interfaces/sender";

export class Buyer {
  private name: string;
  private email: string;
  private CPF_CNPJ: string;
  private areaCode: string;
  private phone: string;
  private birthDate: string;

  constructor(
    _name: string,
    _email: string,
    _CPF_CNPJ: string,
    _areaCode: string,
    _phone: string,
    _birthDate: string
  ) {
    this.$name = _name;
    this.$email = _email;
    this.$CPF_CNPJ = _CPF_CNPJ;
    this.$areaCode = _areaCode;
    this.$phone = _phone;
    this.$birthDate = _birthDate;
  }

  /**
   * Getter $name
   * @return {string}
   */
  public get $name(): string {
    return this.name;
  }

  /**
   * Setter $name
   * @param {string} value
   */
  public set $name(value: string) {
    this.name = value;
  }

  /**
     * Getter $CPF_CNPJ
     * @return {string}

    /**
     * Getter $email
     * @return {string}
     */
  public get $email(): string {
    return this.email;
  }

  /**
   * Setter $email
   * @param {string} value
   */
  public set $email(value: string) {
    this.email = value;
  }

  /**
   * Getter $areaCode
   * @return {string}
   */
  public get $areaCode(): string {
    return this.areaCode;
  }

  /**
   * Setter $areaCode
   * @param {string} value
   */
  public set $areaCode(value: string) {
    this.areaCode = value;
  }

  /**
   * Getter $phone
   * @return {string}
   */
  public get $phone(): string {
    return this.phone;
  }

  /**
   * Setter $phone
   * @param {string} value
   */
  public set $phone(value: string) {
    this.phone = value;
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
   * Getter $CPF_CNPH
   * @return {string}
   */
  public get $CPF_CNPJ(): string {
    return this.CPF_CNPJ;
  }

  /**
   * Setter $CPF_CNPJ
   * @param {string} value
   */
  public set $CPF_CNPJ(value: string) {
    this.CPF_CNPJ = value;
  }
}
