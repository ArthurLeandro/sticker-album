import { Component, OnInit, AfterViewInit } from "@angular/core";
import { AllProduct, Product } from "../../class/products";

@Component({
  selector: "app-store",
  templateUrl: "./store.component.html",
  styleUrls: ["./store.component.css"],
})
export class StoreComponent implements OnInit, AfterViewInit {
  allProducts: AllProduct;
  public products: Product[];

  constructor() {}

  ngAfterViewInit(): void {}

  ngOnInit(): void {
    this.allProducts = new AllProduct();
    this.allProducts.Init();
    this.products = this.allProducts.allProducts;
    console.log(this.allProducts.allProducts);
  }
}
