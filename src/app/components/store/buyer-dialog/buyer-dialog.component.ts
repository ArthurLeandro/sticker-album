import { Component, OnInit, Input, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-buyer-dialog",
  templateUrl: "./buyer-dialog.component.html",
  styleUrls: ["./buyer-dialog.component.css"],
})
export class BuyerDialogComponent implements OnInit {
  @Input() productName: string = "Default Name";
  @Input() urlImage: string = "Default Name";
  @Input() description: string = "Essa é uma coletânea de x figurinhas";
  @Input() productPrice: number = 0;

  constructor(
    public dialogRef: MatDialogRef<BuyerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.productName = data.productName;
    this.urlImage = data.urlImage;
    this.description = data.description;
    this.productPrice = data.price;
  }

  ngOnInit(): void {}
  OnClose() {
    this.dialogRef.close();
    //TODO send data as output if either add to cart or bought some along this line
  }
  OnBuy() {
    alert("Módulo não implementado ainda!");
  }
  OnAddCart() {
    alert("Módulo não implementado ainda!");
  }
}
