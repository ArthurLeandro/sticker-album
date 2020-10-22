import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

import { environment } from "../../environments/environment";
import { User } from "../models";
import * as moment from "moment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("user"))
    );
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  /**
   * Procedimento público para logar um usuário dentro da plataforma.
   * Este método precisa de uma resposta do servidor para terminar, após receber essa resposta ele ainda tem o trabalho de processar a resposta e setar a sessão do usuário.
   * @param username nome do usuário que estará sendo logado
   * @param password senha do usuário que estará sendo logado
   */
  public login(username: string, password: string) {
    // return this.http
    //   .post<User>(environment.apiUrl + "/users/authenticate", {
    //     username,
    //     password,
    //   })
    //   .pipe(
    //     // o que retornar será usado para setar a sessão, um token contendo a data de validade e o JWT.
    //     tap((res) => {
    //       console.log(res);
    //       this.SetUserSession(res);
    //     })
    //   );

    // COMO ESTAVA ANTES
    return this.http
      .post<User>(`${environment.apiUrl}/users/authenticate`, {
        username,
        password,
      })
      .pipe(
        map((user) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem("user", JSON.stringify(user));
          this.userSubject.next(user);
          return user;
        })
      );
  }

  /**
   * Procedimento privado que tem como objetivo setar a sessão de um usuário, armazenando no localStorage dados que vieram do servidor como resposta.
   * @param authResult Resultado da requisição para o servidor
   */
  private SetUserSession(authResult) {
    const expiresAt = moment().add(authResult.expiresIn, "second"); // data de validade da sessão vinda do servidor
    localStorage.setItem(
      environment.JWT_TOKEN_ID || "idToken",
      authResult.idToken
    );
    localStorage.setItem(
      environment.EXPIRATION_TOKEN || "expire_at",
      JSON.stringify(expiresAt.valueOf())
    );
  }

  /**
   * Procedimento público para descontinuar a sessão de um usuário, os dados armazenados no localStorage são removidos.
   */
  public logout() {
    // localStorage.removeItem(environment.JWT_TOKEN_ID || "idToken");
    // localStorage.removeItem(environment.EXPIRATION_TOKEN || " expire_at");
    //COMO ESTAVA ANTES
    // remove user from local storage and set current user to null
    localStorage.removeItem("user");
    this.userSubject.next(null);
    this.router.navigate(["/login"]);
  }

  register(user: User) {
    return this.http.post(`${environment.apiUrl}/users/register`, user);
  }

  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  getById(id: string) {
    return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
  }

  update(id, params) {
    return this.http.put(`${environment.apiUrl}/users/${id}`, params).pipe(
      map((x) => {
        // update stored user if the logged in user updated their own record
        if (id == this.userValue.id) {
          // update local storage
          const user = {
            ...this.userValue,
            ...params,
          };
          localStorage.setItem("user", JSON.stringify(user));

          // publish updated user to subscribers
          this.userSubject.next(user);
        }
        return x;
      })
    );
  }

  delete(id: string) {
    return this.http.delete(`${environment.apiUrl}/users/${id}`).pipe(
      map((x) => {
        // auto logout if the logged in user deleted their own record
        if (id == this.userValue.id) {
          this.logout();
        }
        return x;
      })
    );
  }

  /**
   * Função privada que pega o valor de armazenado em JSON, e retorna em formato de timestamp.
   * @returns moment.Moment um timestamp que estava armazenado dentro do localStorage
   */
  private GetExpirationTime(): moment.Moment {
    let expiration = localStorage.getItem(
      environment.EXPIRATION_TOKEN || "expire_at"
    );
    let expireAt = JSON.parse(expiration);
    return moment(expireAt);
  }

  /**
   *  Função pública para analisar se um usuário está logado dentro da plataforma.
   * Essa função foi deixada pública para qualquer um que necessitar o seu serviço ter acesso de tal forma que quando for efetuar o login() deve analisar se primeiro o usuário está logado.
   * @return boolean que representa se um usuário está logado ou não.
   */
  public IsLogged(): boolean {
    return moment().isBefore(this.GetExpirationTime());
  }
}
