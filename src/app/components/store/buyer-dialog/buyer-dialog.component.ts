import { Component, OnInit, Input, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormControl, Validators } from "@angular/forms";
import { Transaction } from "../../../class/Transaction";
import { Item } from "../../../interfaces/item";
import { TransactionService } from "../../../services/transaction.service";

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

  quantity: FormControl;

  constructor(
    public dialogRef: MatDialogRef<BuyerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private transactionService: TransactionService
  ) {
    this.productName = data.productName;
    this.urlImage = data.urlImage;
    this.description = data.description;
    this.productPrice = data.price;
    this.quantity = new FormControl("", [
      Validators.pattern("^-?[1-9]\\d*(\\.\\d{1,2})?$"), //TODO put two digits in the regex
    ]);
  }

  ngOnInit(): void {}
  OnClose() {
    this.dialogRef.close();
    //TODO send data as output if either add to cart or bought some along this line
  }
  OnBuy(quantity: any) {
    console.log(quantity);
    // let quant: number = Number(quantity) > 0 ? Number(quantity) : 1;
    // let value: number = quant * this.productPrice;
    // let transaction: Transaction;
    // transaction = new Transaction(
    //   "boleto", //TODO make in a way to choose the option of payment
    //   value,
    //   "algum_token_da_transação",
    //   [new Item(quant, value, this.description)],
    //   quant
    // );
    // this.transactionService.OnTransactionConcluded(transaction);
  }

  OnAddCart() {
    alert("Módulo não implementado ainda!");
  }
}
