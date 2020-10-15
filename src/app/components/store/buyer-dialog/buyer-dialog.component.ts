import { Component, OnInit, Input, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from "@angular/forms";
import { Transaction } from "../../../class/Transaction";
import { Item } from "../../../interfaces/item";
import { TransactionService } from "../../../services/transaction.service";
import { Buyer } from "src/app/class/Buyer";

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

  totalAmount: number = 0;

  quantity: FormControl;
  transactionForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<BuyerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private transactionService: TransactionService,
    private builder: FormBuilder
  ) {
    this.productName = data.productName;
    this.urlImage = data.urlImage;
    this.description = data.description;
    this.productPrice = data.price;
    this.quantity = new FormControl("", [
      Validators.pattern("^-?[1-9]\\d*(\\.\\d{1,2})?$"), //TODO put two digits in the regex
      Validators.min(1),
      Validators.max(99),
    ]);
    this.totalAmount = this.productPrice;
  }

  ngOnInit(): void {
    this.transactionForm = this.builder.group({
      quantityN: this.quantity,
      paymentS: "",
    });
    this.transactionForm.valueChanges.subscribe((res) => {
      this.totalAmount = Number(res.quantityN) * this.productPrice;
    });
  }
  OnClose() {
    this.dialogRef.close();
    //TODO send data as output if either add to cart or bought some along this line
  }
  OnBuy() {
    let quant: number =
      Number(this.transactionForm.value.quantityN) > 0
        ? Number(this.transactionForm.value.quantityN)
        : 1;
    let value: number = quant * this.productPrice;
    let transaction: Transaction;
    transaction = new Transaction(
      this.transactionForm.value.paymentS,
      value,
      "algum_token_da_transação",
      [new Item(quant, value, this.description)],
      quant,
      new Buyer( //TODO refatorar para um serviço
        "Clodoaldo",
        "clodoaldo@gmail.com",
        "092354653",
        "ES",
        "+55 37 98643 3759",
        "12/09/1979"
      )
    );
    this.transactionService.OnTransactionConcluded(transaction);
    this.OnClose();
  }

  OnAddCart() {
    alert("Módulo não implementado ainda!");
  }
}
