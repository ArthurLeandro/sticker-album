import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Buyer } from "../class/Buyer";
import { environment } from "../../environments/environment";
import { AlertService } from "./alert.service";

@Injectable({
  providedIn: "root",
})
export class BuyerService {
  constructor(private http: HttpClient, private alert: AlertService) {}

  public GetUserFromBackend(name: string): Buyer {
    let buyer: Buyer = null;
    this.http.get(environment.SERVER_URL).subscribe(
      (res) => {
        console.log("O valor está sendo procurado, aguarde");
        return res;
      },
      (err) => {
        console.error(
          "Ñão foi possível pegar o valor dentro da requisição.",
          err
        );
        this.alert.error(
          "Não foi possíve estabelecer comunicação com o servidor."
        );
        return buyer;
      },
      () => {
        return buyer;
      }
    );
  }
}
