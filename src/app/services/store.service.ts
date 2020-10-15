import { Injectable } from "@angular/core";
import { AllProduct, Product } from "../class/products";

@Injectable({
  providedIn: "root",
})
/**
 * Serviço utilizado para filtrar e enviar request de figurinhas ou álbuns para o front-end.
 */
export class StoreService {
  constructor() {}

  /**
   * Método que envia uma série de produtos para o front end.
   * return Produtos de um request
   */
  public SendRequest(): Product[] {
    let request = new AllProduct();
    request.Init();
    return request.allProducts;
  }
  //TODO FIltrar os request
}
