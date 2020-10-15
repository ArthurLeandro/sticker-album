import { Component, OnInit, AfterViewInit } from "@angular/core";
import { AllProduct, Product } from "../../class/products";
import { StoreService } from "../../services/store.service";

@Component({
  selector: "app-store",
  templateUrl: "./store.component.html",
  styleUrls: ["./store.component.css"],
})
export class StoreComponent implements OnInit, AfterViewInit {
  allProducts: AllProduct;
  public products: Product[];

  constructor(private storeService: StoreService) {}

  ngAfterViewInit(): void {}

  ngOnInit(): void {
    this.allProducts = new AllProduct();
    this.allProducts.Init();
    this.products = this.allProducts.allProducts;
    // console.log(this.allProducts.allProducts);
  }

  public OnStickerFilter(): void {
    //make an request
    let request = this.storeService.SendRequest();
    let onlySticker = request.filter((res) => {
      return res.isSticker == true;
    });
    this.products = onlySticker;
  }

  public OnAlbumFilter(): void {
    //make an request
    let request = this.storeService.SendRequest();
    let onlyAlbum = request.filter((res) => {
      return res.isSticker == false;
    });
    this.products = onlyAlbum;
  }
}
