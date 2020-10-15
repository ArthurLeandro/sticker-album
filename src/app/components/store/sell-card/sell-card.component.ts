import { Component, OnInit, Input, AfterContentInit } from "@angular/core";
import { BuyerDialogComponent } from "../buyer-dialog/buyer-dialog.component";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Product } from "src/app/class/products";
@Component({
  selector: "app-sell-card",
  templateUrl: "./sell-card.component.html",
  styleUrls: ["./sell-card.component.css"],
})
export class SellCardComponent implements OnInit, AfterContentInit {
  urlImage: string;
  description: string = "Lorem Ipsum Dor er";
  price: number = 0.0;
  productName: string = "Default Name";
  sticker: boolean = false;
  @Input() product: Product;

  constructor(public dialog: MatDialog) {}
  ngAfterContentInit(): void {
    this.urlImage = this.product.urlImage;
    this.description = this.product.description;
    this.price = this.product.productPrice;
    this.productName = this.product.productName;
    this.sticker = this.product.isSticker;
  }

  ngOnInit(): void {}

  public OpenDialogBuyer(): void {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.height = "600px";
    dialogConfig.width = "1200px";
    dialogConfig.data = {
      urlImage: this.urlImage,
      description: this.description,
      price: this.price,
      productName: this.productName,
    };
    let dialogueRef = this.dialog.open(BuyerDialogComponent, dialogConfig);
    dialogueRef.afterClosed().subscribe((result) => {
      console.log("Buyer Options Closed!");
      //TODO Aqui que devemos trabalhar com o PagSeguro
    });
  }
}
