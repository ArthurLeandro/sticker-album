import { Item } from "./item";
/**
 * Dados do usuário que está efeutando a compra
 */
export interface Buyer {
  /**
   * Nome do comprador
   */
  name: string;
  /**
   * Email do comprador
   */
  email: string;
  /**
   * CPF/CNPJ do comprador
   */
  CPF_CNPJ: string;
  /**
   *Código de área do  comprador
   */
  areaCode: string;
  /**
   *Telefone do comprador
   */
  phone: string;
  /**
   * Data de nascimento do comprador
   */
  birthDate: string;
}
/**
 * Usar somente caso o comprador por catão não for o dono do próprio cartão
 */
export interface CreditCarHolder {
  /**
   * Nome do comprador
   */
  name: string;
  /**
   * Email do comprador
   */
  email: string;
  /**
   * CPF/CNPJ do comprador
   */
  CPF_CNPJ: string;
  /**
   *Código de área do  comprador
   */
  areaCode: string;
  /**
   *Telefone do comprador
   */
  phone: string;
  /**
   * Data de nascimento do comprador
   */
  birthDate: string;
}
/**
 * Essa interface é utilizada para enviar uma cobrança para uma casa.
 */
export interface Bill {
  /**
   * Rua para enviar a cobrança
   */
  street: string;
  /**
   * número da casa
   */
  number: string;
  /**
   * Bairro da casa
   */
  district: string;
  /**
   * Cidade da casa
   */
  city: string;
  /**
   * Estado da casa
   */
  state: string;
  /**
   * Código postal da casa
   */
  postal_code: string;
}

/**
 *
 */
export interface I_Transaction {
  /**
   *Método da transação. Boleto('boleto') ou cartão de crédito('creditCard')
   */
  method: string;
  /**
   * Valor total da transação
   */
  value: number;
  /**
   * código de token para ser enviado para identificar essa transação
   */
  hash: string;
  /**
   * Todos os items a ser enviado nessa transição
   */
  item: Item[];
  /**
   * Quantidade de items a ser ordenado dentro desse pedido
   */
  quantity: number;
}
