import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Transaction } from "../class/Transaction";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: "root",
})
export class TransactionService {
  constructor(private http: HttpClient) {}

  public OnTransactionConcluded(transaction: Transaction) {
    return this.http
      .post<Transaction>(environment.SERVER_URL + "/payment", transaction)
      .subscribe(
        (res) => {
          console.log("O valor está sendo enviado pro backend :", res);
        },
        (err) => {
          console.error("Um erro ocorreu ao enviar a transação: ", err);
        },
        () => {
          console.log("A transação foi enviada com sucesso e foi terminada.");
        }
      );
  }
}
