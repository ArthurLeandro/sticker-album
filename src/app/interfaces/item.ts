/**
 * Item que será utilizado tanto para adicionar ao carrinho, quanto para efetuar um pedido nas tranações.
 */
export interface I_Item {
  /**
   * Quantidade de items a ser ordenado dentro desse pedido
   */
  quantity: number;
  /**
   * Valor total desse pedido
   */
  value: number;
  /**
   * Descrição desse pedido
   */
  description: string;
}

export class Item implements I_Item {
  quantity: number;
  value: number;
  description: string;
  constructor(_quantity: number, _value: number, _description: string) {
    this.quantity = _quantity;
    this.value = _value;
    this.description = _description;
  }
}
