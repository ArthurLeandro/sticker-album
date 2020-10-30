import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Transaction } from "../class/Transaction";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { AlertService } from "./alert.service";
@Injectable({
  providedIn: "root",
})
export class TransactionService {
  constructor(private http: HttpClient, private alert: AlertService) {}

  public OnTransactionConcluded(transaction: Transaction) {
    if (!environment.production) console.log("Recebido:", transaction);
    return this.http
      .post<Transaction>(environment.SERVER_URL + "/payment", transaction)
      .subscribe(
        (res) => {
          this.alert.success("O valor está sendo enviado para o backend");
          console.log("O valor está sendo enviado pro backend :", res);
        },
        (err) => {
          this.alert.error("O valor não foi enviado corretamente");
          console.error("Um erro ocorreu ao enviar a transação: ", err);
        },
        () => {
          console.log("A transação foi enviada com sucesso e foi terminada.");
        }
      );
  }
}
