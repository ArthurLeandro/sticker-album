import { Component, OnInit, Input } from "@angular/core";
import { BuyerDialogComponent } from "../buyer-dialog/buyer-dialog.component";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
@Component({
  selector: "app-sell-card",
  templateUrl: "./sell-card.component.html",
  styleUrls: ["./sell-card.component.css"],
})
export class SellCardComponent implements OnInit {
  @Input() urlImage: string;
  @Input() description: string = "Lorem Ipsum Dor er";
  @Input() price: number = 0.0;
  @Input() productName: string = "Default Name";
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  public OpenDialogBuyer(): void {
    let dialogueRef = this.dialog.open(BuyerDialogComponent, {
      height: "300px",
      width: "600px",
    });
    dialogueRef.afterClosed().subscribe((result) => {
      console.log("Buyer Options Closed!");
      //TODO Aqui que devemos trabalhar com o PagSeguro
    });
  }
}
