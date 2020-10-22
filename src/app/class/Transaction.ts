import { Item } from "../interfaces/item";
import { I_Transaction } from "../interfaces/sender";
import { Buyer } from "./Buyer";

export class Transaction implements I_Transaction {
  method: string;
  value: number;
  hash: string;
  item: Item[];
  quantity: number;
  buyer: Buyer;
  constructor(
    _method: string,
    _value: number,
    _hash: string,
    _item: Item[],
    _quantity: number,
    _buyer: Buyer
  ) {
    this.method = _method;
    this.value = _value;
    this.hash = _hash;
    this.item = _item;
    this.quantity = _quantity;
    this.buyer = _buyer;
  }
}
